import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

import { NavLink } from "react-router-dom";

import ArticlePage from "./article_page";

import "../styles/WriteArticle.css";
import colors from "../data/color";

class WriteArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.currArticle,
    };

    this.maxLetters = 3550;

    this.setProgress = this.setProgress.bind(this);
    this.StyleText = this.StyleText.bind(this);
    this.getColorBlocks = this.getColorBlocks.bind(this);
    this.setArticleColor = this.setArticleColor.bind(this);
  }

  componentDidMount() {}

  setProgress(len) {
    let progress = (len * 100) / this.maxLetters;
    let article = this.state.article;

    article.progress = progress;

    this.setState({ article });
  }

  StyleText(style) {
    if (style === "heading") {
      document.execCommand("formatBlock", false, "h3");
    } else document.execCommand(style, false, null);
  }

  getColorBlocks() {
    let response = [];

    response = colors.map((color, i) => {
      return (
        <div
          className="colorBlock"
          style={{ backgroundColor: color }}
          key={i}
          onClick={this.setArticleColor.bind(this, color)}
        ></div>
      );
    });

    return response;
  }

  setArticleColor(articleColor) {
    let posts = this.props.articles;
    let id = this.state.article.id;

    posts[id].color = articleColor;
    this.setState({ article: posts[id] });

    let obj = {
      store: "may-articles",
      key: "articles",
      data: posts,
    };

    this.updateArticle(obj);
  }

  updateArticle(obj) {
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

  render() {
    let colors = this.getColorBlocks();

    return (
      <div>
        <div
          className="modal fade"
          id="colorsModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ backgroundColor: "rgba(37, 37, 51)", color: "#d2d5ff" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Цвет статьи</h5>
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
                {colors}
              </div>
            </div>
          </div>
        </div>

        <div className="Header">
          <NavLink to="/">
            <button className="HeaderBtn" style={{ float: "left" }}>
              <i className="fas fa-home"></i>
            </button>
          </NavLink>
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
          {/* <button
            className="HeaderBtn"
            onClick={this.StyleText.bind(this, "strikethrough")}
          >
            <i className="fas fa-strikethrough"></i>
          </button> */}
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
            data-toggle="modal"
            data-target="#colorsModal"
          >
            <i className="fas fa-palette"></i>
          </button>
        </div>

        <div className="progress progressBar">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{
              width: this.state.article.progress + "%",
              backgroundColor: "#ffdef0",
            }}
          ></div>
        </div>

        <div className="Body">
          <div className="wrapper">
            <ArticlePage
              currArticle={this.state.article}
              articles={this.props.articles}
              onProgress={this.setProgress}
              onArticleSave={this.updateArticle}
            />
          </div>{" "}
        </div>

        <div className="Footer">
          объем статьи: {Math.round(this.state.article.progress) + "%"}
        </div>
      </div>
    );
  }
}

export default WriteArticle;
