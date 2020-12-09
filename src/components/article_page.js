import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

// import { NavLink } from "react-router-dom";

import "../styles/WriteArticle.css";

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.TextRef = React.createRef();
    this.TitleRef = React.createRef();

    this.articleId = "";

    this.DeleteStyles = this.DeleteStyles.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.articleChanged = this.articleChanged.bind(this);
  }

  componentDidMount() {
    let id = this.props.id;
    let len = this.props.articles.length;

    if (!id) {
      id = len + 1;
    }

    this.articleId = id;
  }

  DeleteStyles(event) {
    event.preventDefault();
    let text = (event.originalEvent || event).clipboardData.getData(
      "text/plain"
    );
    document.execCommand("insertText", false, text);
  }

  setProgress() {
    let text = this.TextRef.current.innerText;
    let len = text.length;

    this.props.onProgress(len);

    this.articleChanged();
  }

  saveArticle(obj) {
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

  updateArticle() {
    let title = this.TitleRef.current.value;
    let text = this.TextRef.current.innerText;
    let progress = this.props.progress;
    let len = text.length;

    let data = {
      title,
      text,
      progress,
    };

    let obj = {
      store: "may-articles",
      key: "articles",
      data,
    };

    this.saveArticle(obj);
  }

  articleChanged() {
    let len = this.TextRef.current.innerText.length;

    if (len % 10 === 0) this.updateArticle();
  }

  render() {
    return (
      <div>
        <div
          className="ArticlePage"
          style={{ backgroundColor: this.props.color }}
        >
          <textarea
            type="text"
            className="ArticlePageTitle"
            rows="2"
            ref={this.TitleRef}
            placeholder="Заголовок статьи"
          ></textarea>
          <div
            className="ArticlePageText"
            contentEditable="true"
            placeholder="Текст"
            ref={this.TextRef}
            onPaste={this.DeleteStyles}
            onInput={this.setProgress}
          ></div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
