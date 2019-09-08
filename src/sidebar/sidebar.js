import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";

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
            <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}
      </div>
    );
  }

  handleNewNote = () => {
    console.log("clicking new note");
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
    console.log(this.state);
  };
}

export default withStyles(styles)(SidebarComponent);
