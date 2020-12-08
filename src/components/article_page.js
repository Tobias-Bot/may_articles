import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

// import { NavLink } from "react-router-dom";

import "../styles/WriteArticle.css";

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.DeleteStyles = this.DeleteStyles.bind(this);
  }

  componentDidMount() {}

  DeleteStyles(event) {
    event.preventDefault();
    let text = (event.originalEvent || event).clipboardData.getData(
      "text/plain"
    );
    document.execCommand("insertText", false, text);
  }

  render() {
    return (
      <div className="ArticlePage">
        <textarea
          type="text"
          className="ArticlePageTitle"
          rows="2"
          placeholder="Заголовок статьи"
        ></textarea>
        <div
          className="ArticlePageText"
          contentEditable="true"
          placeholder="Текст"
          onPaste={this.DeleteStyles}
        ></div>
      </div>
    );
  }
}

export default ArticlePage;
