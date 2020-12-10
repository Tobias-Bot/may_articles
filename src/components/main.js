import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";

import { NavLink } from "react-router-dom";

import ArticleView from "./article_view";

import "../App.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.ModalRef = React.createRef();

    this.deleteArticleId = -1;
    this.submissionText = `
      Пожалуйста, проверьте статью перед публикацией.
      Изменить ее содержимое после отправки будет невозможно.
      <br />
      <br />
      Ваша статья будет опубликована на стене сообщества Май
      в ближайшие дни после проверки администрацией.
    `;

    this.getSavedArticles = this.getSavedArticles.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.setCurrArticle = this.setCurrArticle.bind(this);
    this.setNewCurrArticle = this.setNewCurrArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.updateArticles = this.updateArticles.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.confirmSubmission = this.confirmSubmission.bind(this);
  }

  componentDidMount() {
    let obj = {
      store: "may-articles",
      key: "articles",
    };

    this.getSavedArticles(obj);
  }

  getSavedArticles(obj) {
    let openRequest = indexedDB.open(obj.store, 1);

    openRequest.onupgradeneeded = () => {
      let DB = openRequest.result;
      if (!DB.objectStoreNames.contains(obj.store)) {
        DB.createObjectStore(obj.store);
      }
    };

    openRequest.onerror = function () {
      console.error("Can't create DB", openRequest.error);
    };

    openRequest.onsuccess = () => {
      let DB = openRequest.result;

      let tx = DB.transaction(obj.store, "readonly");
      let store = tx.objectStore(obj.store);

      let articles = store.get(obj.key);

      tx.oncomplete = () => {
        if (articles.result) {
          this.setState({ articles: articles.result }, () => {
            this.props.onArticlesLoad(articles.result);
          });
        }
      };
    };
  }

  setNewCurrArticle(article) {
    this.props.onArticleCreate(article);
  }

  getPosts() {
    let response = [];
    let articles = this.state.articles;

    response = articles.map((article, i) => {
      return (
        <ArticleView
          key={article.title + i}
          article={article}
          onCurrArticle={this.setNewCurrArticle}
          onArticleDelete={this.deleteArticle}
          onArticleSubmit={this.confirmSubmission}
        />
      );
    });

    return response;
  }

  setCurrArticle() {
    let articles = this.state.articles;
    let id = articles.length;

    let currentArticle = {
      id,
      title: "",
      text: "",
      progress: 0,
      color: "white",
    };

    articles.push(currentArticle);

    this.props.onArticlesLoad(articles);
    this.props.onArticleCreate(currentArticle);
  }

  deleteArticle(id) {
    let articles = this.state.articles;

    articles.splice(id, 1);

    for (let i = id; i < articles.length; i++) {
      articles[i].id--;
    }

    this.setState({ articles });
    this.props.onArticlesLoad(articles);
    this.updateArticles({
      store: "may-articles",
      key: "articles",
      data: articles,
    });
  }

  updateArticles(obj) {
    let openRequest = indexedDB.open(obj.store, 1);

    openRequest.onupgradeneeded = () => {
      let DB = openRequest.result;
      if (!DB.objectStoreNames.contains(obj.store)) {
        DB.createObjectStore(obj.store);
      }
    };

    openRequest.onerror = function () {
      console.error("Can't create DB", openRequest.error);
    };

    openRequest.onsuccess = () => {
      let DB = openRequest.result;

      let tx = DB.transaction(obj.store, "readwrite");
      let store = tx.objectStore(obj.store);

      store.put(obj.data, obj.key);
    };
  }

  confirmSubmission(id) {
    this.deleteArticleId = id;
  }

  submitPost() {
    let id = this.deleteArticleId;
    let postId = firebase.database().ref().child("articles").push().key;
    let data = this.state.articles[id];

    let article = {
      title: data.title,
      text: data.text,
      color: data.color,
    };

    firebase
      .database()
      .ref("articles/article" + postId)
      .set(article);

    // this.deleteArticle(id);

    this.deleteArticleId = -1;
  }

  render() {
    let posts = this.getPosts();

    let posts1 = [];
    let posts2 = [];

    for (let i = 0; i < posts.length; i++) {
      if (i % 2 === 0) posts1.push(posts[i]);
      else posts2.push(posts[i]);
    }

    return (
      <div>
        <div
          className="modal fade"
          id="submitModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
          ref={this.ModalRef}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", color: "rgba(0, 0, 0, 0.7)" }}>
                  <i className="fas fa-paper-plane"></i>
                </div>
                <br />
                <br />
                <div
                  className="submissionText"
                  dangerouslySetInnerHTML={{ __html: this.submissionText }}
                ></div>
                <br />
                <button
                  className="confirmSubmitBtn"
                  data-dismiss="modal"
                  onClick={this.submitPost}
                >
                  опубликовать
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="HeaderMain">
          <NavLink to="/write">
            <button className="headerMainBtn" onClick={this.setCurrArticle}>
              <i className="fas fa-edit"></i>
              создать статью
            </button>
          </NavLink>
        </div>

        <div className="BodyMain">
          <div className="row">
            <div className="col">{posts1}</div>
            <div className="col">{posts2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
