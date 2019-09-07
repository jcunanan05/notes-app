import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";

class App extends Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  };

  render() {
    return <div>Hello World</div>;
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;

          return data;
        });

        console.log(notes);
        this.setState({ notes });
      });
  };
}

export default App;
