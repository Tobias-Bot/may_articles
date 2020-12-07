import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";

import { NavLink } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.getDrafts = this.getDrafts.bind(this);
  }

  componentDidMount() {
    // let id = firebase.database().ref().child('articles').push().key;

    // let article = {
    //   title: 'new article',
    //   text: 'some text',
    //   author: 'me'
    // }

    // firebase.database().ref('articles/article' + id).set(article);
  }

  getDrafts() {
    
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default Main;
