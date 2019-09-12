import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebarItem/sidebarItem";

/**
 * @param {Object[]} notes
 * @param {Object} classes
 * @param {Number} selectedNoteIndex
 */

class SidebarComponent extends Component {
  state = {
    addingNote: false,
    title: ""
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    const { state } = this;

    if (!notes) {
      return <div>Add A note!</div>;
    }
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button className={classes.newNoteBtn} onClick={this.handleNewNote}>
            {state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {state.addingNote ? (
            <div>
              <input
                type="text"
                value={state.title}
                className={classes.newNoteInput}
                placeholder="Enter"
                onChange={e => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}

          <List>
            {notes.map((_note, _index) => (
              <div key={_index}>
                <SidebarItemComponent
                  _note={_note}
                  _index={_index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={this.selectNote}
                  deleteNote={this.deleteNote}
                />

                <Divider />
              </div>
            ))}
          </List>
        </div>
      );
    }
  }

  handleNewNote = () => {
    this.setState(currentState => ({
      ...currentState,
      title: "",
      addingNote: !currentState.addingNote
    }));
  };

  updateTitle = title => {
    this.setState({ title });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: "", addingNote: false });
  };

  selectNote = (note, index) => this.props.selectNote(note, index);

  deleteNote = note => this.props.deleteNote(note);
}

export default withStyles(styles)(SidebarComponent);
