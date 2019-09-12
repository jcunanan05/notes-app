import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "react-quill/dist/quill.snow.css";

class EditorComponent extends Component {
  state = {
    text: "",
    title: "",
    id: ""
  };

  render() {
    const { state } = this;
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon} />
        <input
          type="text"
          className={classes.titleInput}
          placeholder="Note title..."
          value={state.title ? state.title : ""}
          onChange={e => this.updateTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          value={state.text}
          onChange={this.updateBody}
        />
      </div>
    );
  }

  componentDidMount = () => {
    const { props } = this;
    if (!props) return;
    this.setState({
      text: props.selectedNote.body,
      title: props.selectedNote.title,
      id: props.selectedNote.id
    });
  };

  componentDidUpdate = () => {
    const { props, state } = this;
    if (props.selectedNote.id !== state.id) {
      this.setState({
        text: props.selectedNote.body,
        title: props.selectedNote.title,
        id: props.selectedNote.id
      });
    }
  };

  updateTitle = async title => {
    await this.setState({ title });
    this.update();
  };

  updateBody = async value => {
    await this.setState({ text: value });
    this.update();
  };

  update = debounce(() => {
    const { id, text, title } = this.state;
    this.props.noteUpdate(id, {
      title,
      body: text
    });
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
