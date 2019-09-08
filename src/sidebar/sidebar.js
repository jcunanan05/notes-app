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
    title: null
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    const { state } = this;
    return (
      <div className={classes.sidebarContainer}>
        <Button className={classes.newNoteBtn} onClick={this.handleNewNote}>
          New Note
        </Button>
        {state.addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter"
              onKeyUp={e => this.updateTitle(e.target.value)}
            />
          </div>
        ) : null}
      </div>
    );
  }

  handleNewNote = () => {
    console.log("clicking new note");
    this.setState(currentState => ({
      ...currentState,
      addingNote: !currentState.addingNote
    }));
  };

  updateTitle = txt => {
    console.log("this is txt:", txt);
  };
}

export default withStyles(styles)(SidebarComponent);
