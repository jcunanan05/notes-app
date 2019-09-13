import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import firebase from "firebase/app";
import "firebase/firestore";

it("renders without crashing", () => {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "notes-app-22b35.firebaseapp.com",
    databaseURL: "https://notes-app-22b35.firebaseio.com",
    projectId: "notes-app-22b35",
    storageBucket: "",
    messagingSenderId: "586542952564",
    appId: "1:586542952564:web:b7a092e9668b47cbe92121"
  });

  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
