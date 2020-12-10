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

    this.DeleteStyles = this.DeleteStyles.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }

  componentDidMount() {
    let article = this.props.currArticle;

    if (article.title) {
      this.TitleRef.current.value = article.title;
    }

    if (article.text) {
      this.TextRef.current.innerHTML = article.text;
    }
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
    this.updateArticle();
  }

  updateArticle() {
    let title = this.TitleRef.current.value;
    let text = this.TextRef.current.innerHTML;
    let progress = this.props.currArticle.progress;
    let color = this.props.currArticle.color;
    let id = this.props.currArticle.id;
    let articles = this.props.articles;

    if (!id) {
      id = 0;
    }

    articles[id] = {
      id,
      title,
      text,
      progress,
      color,
    };

    let obj = {
      store: "may-articles",
      key: "articles",
      data: articles,
    };

    this.props.onArticleSave(obj);
  }

  render() {
    let article = this.props.currArticle;

    return (
      <div>
        <div
          className="ArticlePage"
          style={{ backgroundColor: article.color }}
        >
          <textarea
            type="text"
            className="ArticlePageTitle"
            rows="2"
            ref={this.TitleRef}
            placeholder="Заголовок статьи"
            onChange={this.updateArticle}
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
