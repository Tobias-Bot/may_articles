import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

// import { NavLink } from "react-router-dom";

import "../styles/WriteArticle.css";

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="ArticlePage">
        <textarea
          type="text"
          className="ArticlePageTitle"
          rows="1"
          placeholder="Заголовок страницы"
        ></textarea>
        <div
          className="ArticlePageText"
          contentEditable="true"
          placeholder="Текст"
        ></div>
      </div>
    );
  }
}

export default ArticlePage;
