import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

// import { NavLink } from "react-router-dom";

import ArticlePage from "./article_page";

import "../styles/WriteArticle.css";

class WriteArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createNewArticle = this.createNewArticle.bind(this);
    this.StyleText = this.StyleText.bind(this);
  }

  componentDidMount() {}

  createNewArticle() {}

  StyleText(style) {
    if (style === "heading") {
      document.execCommand("formatBlock", false, "h3");
    } else document.execCommand(style, false, null);
  }

  render() {
    return (
      <div>
        <div className="Header">
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "bold")}
          >
            <i className="fas fa-bold"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "italic")}
          >
            <i className="fas fa-italic"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "underline")}
          >
            <i className="fas fa-underline"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "strikethrough")}
          >
            <i className="fas fa-strikethrough"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "insertUnorderedList")}
          >
            <i className="fas fa-list-ul"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "insertOrderedList")}
          >
            <i className="fas fa-list-ol"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "heading")}
          >
            <i className="fas fa-heading"></i>
          </button>
        </div>
        <ArticlePage />
      </div>
    );
  }
}

export default WriteArticle;
