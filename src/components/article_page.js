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

    this.DeleteStyles = this.DeleteStyles.bind(this);
    this.setProgress = this.setProgress.bind(this);
  }

  componentDidMount() {}

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
  }

  render() {
    return (
      <div>
        <div className="ArticlePage" style={{backgroundColor: this.props.color}}>
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
