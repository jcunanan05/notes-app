import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "notes-app-22b35.firebaseapp.com",
  databaseURL: "https://notes-app-22b35.firebaseio.com",
  projectId: "notes-app-22b35",
  storageBucket: "",
  messagingSenderId: "586542952564",
  appId: "1:586542952564:web:b7a092e9668b47cbe92121"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
