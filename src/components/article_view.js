import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.setCurrArticle = this.setCurrArticle.bind(this);
  }

  componentDidMount() {}

  setCurrArticle() {
    let article = this.props.article;

    this.props.onCurrArticle(article)
  }

  render() {
    let article = this.props.article;

    return (
      <div className="articleView" style={{ backgroundColor: article.color }}>
        <div className="articleViewHeader">
          <button className="postBtn" style={{ borderColor: article.color }}>
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
        <div className="articleViewTitle">{article.title}</div>
        <div className="articleViewFooter">
          <div
            className="progress"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
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
        </div>
      </div>
    );
  }
}

export default ArticleView;
