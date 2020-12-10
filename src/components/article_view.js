import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.submitProgress = 0;

    this.setCurrArticle = this.setCurrArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.submitArticle = this.submitArticle.bind(this);
  }

  componentDidMount() {}

  setCurrArticle() {
    let article = this.props.article;

    this.props.onCurrArticle(article);
  }

  deleteArticle() {
    let id = this.props.article.id;
    this.props.onArticleDelete(id);
  }

  submitArticle() {
    let id = this.props.article.id;

    this.props.onArticleSubmit(id);
  }

  render() {
    let article = this.props.article;

    return (
      <div className="articleView" style={{ backgroundColor: article.color }}>
        <div className="articleViewHeader">
          <button
            className="postBtn"
            style={{ borderColor: article.color }}
            onClick={this.deleteArticle}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <NavLink to="/write">
            <button
              className="postBtn"
              style={{ borderColor: article.color }}
              onClick={this.setCurrArticle}
            >
              открыть
            </button>
          </NavLink>
        </div>
        <div className="articleViewTitle">
          {article.title.length ? article.title : "Без заголовка"}
        </div>
        <div className="articleViewFooter">
          {article.progress < this.submitProgress ? (
            <div
              className="progress"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "15px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: article.progress + "%",
                  backgroundColor: article.color,
                }}
              ></div>
            </div>
          ) : (
            <button
              className="submitPostBtn"
              onClick={this.submitArticle}
              data-toggle="modal"
              data-target="#submitModal"
            >
              опубликовать
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ArticleView;
