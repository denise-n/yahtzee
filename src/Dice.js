import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    // maps each die from dice array to Die Component
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die 
          handleClick={this.props.handleClick} //toggle method
          val={d} //value of the die
          locked={this.props.locked[idx]} //whether die at index is currently locked
          idx={idx}
          key={idx}
          disabled={this.props.disabled} 
          rolling={this.props.rolling && !this.props.locked[idx]}
        />
      )}
    </div>
  }
}

export default Dice;