import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";

class SidebarComponent extends Component {
  state = {};
  render() {
    return <div>hellow from sidebar</div>;
  }
}

export default withStyles(styles)(SidebarComponent);
