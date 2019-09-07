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
        <ReactQuill
          theme="snow"
          value={state.text}
          onChange={this.updateBody}
        />
      </div>
    );
  }

  updateBody = async value => {
    await this.setState({ text: value });
    this.update();
  };

  update = debounce(() => {
    const { id, text, title } = this.state;
    console.log("updated text", text);
    // this.props.noteUpdate(id, {
    //   title,
    //   body: text
    // });
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
