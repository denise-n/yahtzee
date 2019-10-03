import React, { Component } from "react";
import "./Die.css";


class Die extends Component {
  static defaultProps = {
    numberWord : ['one', 'two', 'three', 'four', 'five', 'six']
  }
  handleToggle = () => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const {numberWord, locked, val, disabled } = this.props
    let classes = `Die fa-5x fas fa-dice-${numberWord[val - 1]}`
    if (locked) classes += ' Die-locked'
    return <i className={classes} onClick={this.handleToggle} disabled={disabled}></i>
  }
}

export default Die;
