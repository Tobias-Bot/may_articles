import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as firebase from "firebase/app";
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit');

var firebaseConfig = {
  apiKey: "AIzaSyDM4JCxS6_vYEoba-TjFTqVLVYp_Oc0agY",
  authDomain: "may-articles.firebaseapp.com",
  databaseURL:
    "https://may-articles-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "may-articles",
  storageBucket: "may-articles.appspot.com",
  messagingSenderId: "678415622728",
  appId: "1:678415622728:web:8403375d12e292c4202e7d",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
