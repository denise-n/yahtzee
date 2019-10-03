import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { name, score, doScore, description } = this.props
   
    return (
      <tr className={score === undefined ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"} onClick={doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score === undefined ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;