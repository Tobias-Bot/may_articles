import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";

import { NavLink } from "react-router-dom";

import ArticleView from "./article_view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.getSavedArticles = this.getSavedArticles.bind(this);
    this.getPosts = this.getPosts.bind(this);
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

  getPosts() {
    let response = [];
    let articles = this.state.articles;

    response = articles.map((article, i) => {
      return <ArticleView key={article.title + i} article={article} />;
    });

    return response;
  }

  render() {
    let posts = this.getPosts();

    return (
      <div>
        {posts}
        <NavLink to="/write">
          <button>создать статью</button>
        </NavLink>
      </div>
    );
  }
}

export default Main;
