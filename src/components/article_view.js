import React from "react";

import "../App.css";

class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {}

  render() {
    let article = this.props.article;

    return (
      <div className="articleView" style={{ backgroundColor: article.color }}>
        <div className="articleViewHeader">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{
              width: article.progress + "%",
              backgroundColor: "#ffdef0",
            }}
          ></div>
        </div>
        <div className="articleViewTitle">{article.title}</div>
        <div>{article.text.substring(0, 30) + "..."}</div>
        <div className="articleViewFooter"></div>
      </div>
    );
  }
}

export default ArticleView;
