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
  }

  componentDidMount() {}

  createNewArticle() {

  }

  render() {
    return (<div>
      <ArticlePage />
    </div>);
  }
}

export default WriteArticle;
