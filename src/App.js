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
    return (
      <>
        <h1>Hello React!</h1>
      </>
    );
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

        this.setState({ notes });
      });
  };

  newNote = () => {};

  selectNote = (note, index) => {
    this.setState({
      selectedNoteIndex: index,
      selectedNote: note
    });
  };

  deleteNote = async note => {
    const { state } = this;
    const noteIndex = state.notes.indexOf(note);
    await this.setState({ notes: state.notes.filter(_note => _note !== note) });
    if (state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      state.notes.length > 1
        ? this.selectNote(
            state.notes[state.selectedNoteIndex - 1],
            state.selectedNoteIndex - 1
          )
        : this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection("notes")
      .doc(note.id)
      .delete();
  };

  noteUpdate = (id, note) => {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .update({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  };

  newNote = async title => {
    const newFromDB = await firebase
      .firestore()
      .collection("notes")
      .add({
        title,
        body: "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, { title, body: "" }] });
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter(_note => _note.id === newID)[0]
    );
    this.setState({
      selectNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex
    });
  };
}

export default App;
