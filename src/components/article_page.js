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
    let text = this.TextRef.current.innerText;
    let progress = this.props.progress;
    let color = this.props.color;
    let articles = this.props.articles;
    let len = text.length;

    let data = {
      title,
      text,
      progress,
      color,
    };

    articles.unshift(data);

    let obj = {
      store: "may-articles",
      key: "articles",
      data: articles,
    };

    this.props.onArticleSave(obj, len);
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
