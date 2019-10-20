import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  handleClick = () => {
    const { isRolling, doScore } = this.props
    if(!this.props.isRolling) {
      this.props.doScore()
    }
  }
  render() {
    const { name, score, description } = this.props
   
    return (
      <tr className={score === undefined ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"} onClick={this.handleClick}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score === undefined ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;