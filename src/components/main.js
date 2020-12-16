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

      username: "",
      userurl: "",
    };

    this.ModalRef = React.createRef();

    this.deleteArticleId = -1;
    this.submissionText = `
      Пожалуйста, проверьте вашу запись перед публикацией.
      Изменить ее содержимое после отправки будет невозможно.
      <br />
      <br />
      Ваша запись будет опубликована на стене сообщества Май
      в ближайшие дни после проверки администрацией.
    `;
    this.userText = `
      Пожалуйста, введите ваше имя или псевдоним, чтобы мы могли указать автора
      статьи. По желанию можно указать ссылку на свою личную страницу или
      группу-блог Вконтакте. Если данные не указаны, ваши записи будут публиковаться
      анонимно.
    `;
    this.infoText = `
      <h4>Рекомендации к написанию статей</h4>
      1. Тематика публикации не должна сильно отличаться от постов в сообществе Май.
      Темы, на которые следует ориентироваться, могут быть следующие: саморазвитие,
      забота о себе, мотивация, ментальное или физическое здоровье, психология и подобное.
      Записи не соответствующие тематике сообщества не будут опубликованы на стене сообщества.
      <br />
      <br />
      2. Если вы хотите опубликовать статью следует учитывать, что объем таких публикаций достаточно
      небольшой (6 - 8 фотографий в посте, см. пример на стене сообщества), рекомендуем выделять
      основные мысли, писать в первую очередь о том, что действительно необходимо упомянуть.
      <br />
      <br />
      3. Разделяйте текст на отдельные абзацы и используйте заголовки
      для каждой части. В таком формате людям легче воспринимать информацию,
      чем читать сплошной текст.
      <br />
      <br />
      4. Выделяйте слова или словосочетания с помощью стилей там, где это
      уместно, для комфортного чтения текста.
      <br />
      <br />
      <h4>Объем публикаций</h4>
      Полоса прогресса в редакторе показывает текущий объем записи. Для публикации
      необходимо, чтобы объем поста составлял > 99%. В этом случае полоса прогресса
      будет полностью заполнена, и вы сможете опубликовать запись. Максимальный объем
      статьи не должен превышать 120%.
      <br />
      <br />
      <h4>Авторство</h4>
      Имя автора и ссылка на него указываются в комментариях под постом а также на
      последней фотографии в посте и не удаляются. В качестве ссылки на автора
      принимаются только ресурсы Вконтакте, например, ваша личная страница или группа-блог.
      Если данные об авторе не указаны, запись будет опубликована анонимно.
    `;

    this.getSavedArticles = this.getSavedArticles.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.setCurrArticle = this.setCurrArticle.bind(this);
    this.setNewCurrArticle = this.setNewCurrArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.updateArticles = this.updateArticles.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.confirmSubmission = this.confirmSubmission.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setUserUrl = this.setUserUrl.bind(this);
  }

  componentDidMount() {
    let obj = {
      store: "may-articles",
      key: "articles",
    };

    this.getSavedArticles(obj);

    let username = localStorage.getItem("may-username");
    let userurl = localStorage.getItem("may-userurl");

    if (!username) username = "";
    if (!userurl) userurl = "";

    this.setState({
      username,
      userurl,
    });
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

    let username = localStorage.getItem("may-username");
    let userurl = localStorage.getItem("may-userurl");

    let article = {
      title: data.title,
      text: data.text,
      color: data.color,
      username,
      userurl,
    };

    firebase
      .database()
      .ref("articles/article" + postId)
      .set(article);

    this.deleteArticle(id);

    this.deleteArticleId = -1;
  }

  setUsername(e) {
    let name = e.target.value;

    localStorage.setItem("may-username", name);
    this.setState({ username: name });
  }

  setUserUrl(e) {
    let url = e.target.value;

    localStorage.setItem("may-userurl", url);
    this.setState({ userurl: url });
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
          id="userModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Автор публикаций</h5>
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
                <input
                  className="userInput"
                  type="text"
                  value={this.state.username}
                  placeholder="Имя или псевдоним"
                  onChange={this.setUsername}
                />
                <input
                  className="userInput"
                  type="text"
                  value={this.state.userurl}
                  placeholder="Ссылка на автора"
                  onChange={this.setUserUrl}
                />
                <br />
                <br />
                <div
                  className="submissionText"
                  dangerouslySetInnerHTML={{ __html: this.userText }}
                ></div>
                <br />
                <button className="confirmSubmitBtn" data-dismiss="modal">
                  сохранить
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="submitModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Опубликовать в Май</h5>
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

        <div
          className="modal fade"
          id="infoModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Общая информация</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="submissionText"
                  dangerouslySetInnerHTML={{ __html: this.infoText }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="HeaderMain">
          <button
            className="headerMainBtn"
            style={{ float: "left" }}
            data-toggle="modal"
            data-target="#userModal"
          >
            <i className="fas fa-user"></i>
          </button>

          <button
            className="headerMainBtn"
            style={{ float: "left" }}
            data-toggle="modal"
            data-target="#infoModal"
          >
            <i className="fas fa-info"></i>
          </button>

          <NavLink to="/write">
            <button className="headerMainBtn" onClick={this.setCurrArticle}>
              <i className="fas fa-edit"></i>
              создать статью
            </button>
          </NavLink>
        </div>

        <div className="BodyMain">
          <div className="wrapper">
            {posts.length ? (
              <div className="row">
                <div className="col">{posts1}</div>
                <div className="col">{posts2}</div>
              </div>
            ) : (
              <div className="textPage">нет неопубликованных записей</div>
            )}

            <br />
            <div
              className="supportCardView"
              style={{
                background: `url(https://64.media.tumblr.com/fb6257322a3e73e7aa7247ba2b678163/tumblr_pp3mmshJhz1xvjko7o1_1280.gifv) center/100% no-repeat`,
              }}
            >
              <div className="supportCardBlackout">
                <div className="supportCardTitle">Есть вопросы?</div>
                <div className="supportCardText">
                  Напиши нам в лс, если у тебя возникли какие-либо вопросы по
                  приложению или публикации постов. Мы ответим тебе в ближайшее
                  время.
                </div>
                <button className="supportCardBtn">
                  <a
                    style={{ textDecoration: "none", color: "#d2d5ff" }}
                    href="https://vk.com/im?sel=-160404048"
                  >
                    написать
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
