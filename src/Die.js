import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  handleToggle = () => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleToggle}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
