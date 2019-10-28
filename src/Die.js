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
    const {numberWord, locked, val, disabled, rolling } = this.props
    let classes = `Die fas fa-dice-${numberWord[val - 1]}`
    if (locked) classes += ' Die-locked'
    if (rolling) classes += ' Die-rolling'

    return <i className={classes} onClick={this.handleToggle} disabled={disabled}></i>
  }
}

export default Die;
