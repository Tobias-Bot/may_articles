import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    let id = firebase.database().ref().child('articles').push().key;

    let article = {
      title: 'new article',
      text: 'some text',
      author: 'me'
    }

    firebase.database().ref('articles/article' + id).set(article);
  }

  render() {

    return (
      <div>
        Hello
      </div>
    );
  }
}

export default Main;
