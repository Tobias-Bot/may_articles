import React from "react";

// import * as firebase from "firebase/app";
// import "firebase/database";

// import { NavLink } from "react-router-dom";

import ArticlePage from "./article_page";

import "../styles/WriteArticle.css";
import colors from "../data/color";

class WriteArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      articleColor: "white",
    };

    this.maxLetters = 3600;

    this.setProgress = this.setProgress.bind(this);
    this.StyleText = this.StyleText.bind(this);
    this.getColorBlocks = this.getColorBlocks.bind(this);
    this.setArticleColor = this.setArticleColor.bind(this);
  }

  componentDidMount() {}

  setProgress(len) {
    let progress = (len * 100) / this.maxLetters;

    this.setState({ progress });
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
    this.setState({ articleColor });
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
            <div className="modal-content">
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
          {/* <button
            className="HeaderBtn"
            onClick={() => document.execCommand("fontSize", false, "5")}
          >
            <i className="fas fa-heading"></i>
          </button>
          <button
            className="HeaderBtn"
            onClick={() => document.execCommand("fontSize", false, "3")}
          >
            <i className="fas fa-marker"></i>
          </button> */}
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
            style={{ width: this.state.progress + "%", backgroundColor: "#ffdef0" }}
          ></div>
        </div>

        <div className="Body">
          <ArticlePage
            color={this.state.articleColor}
            progress={this.state.progress}
            articles={this.props.articles}
            onProgress={this.setProgress}
          />
        </div>

        <div className="Footer">завершенность статьи: {Math.round(this.state.progress) + "%"}</div>
      </div>
    );
  }
}

export default WriteArticle;
