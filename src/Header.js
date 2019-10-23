import React, { Component } from 'react'
import Dice from "./Dice"
import './Header.css'

class Header extends Component {
    displayRolls = () => {
        const { rollsLeft } = this.props
        switch (rollsLeft) {
            case 3:
                return 'Rolling...'
            case 2:
                return '2 Rolls Left'
            case 1: 
                return '1 Roll Left!'
            default:
                return 'Out of Rolls!'
        } 
    }
        

    render() {
        const { dice, locked, rollsLeft, isRolling, gameOver } = this.props
        

        return (
            <header className='Game-header'>
                <h1 className='Game-title'>Yahtzee!</h1>
                <section className='Game-dice-section'>
                    <Dice
                    dice={dice} //array
                    locked={locked} //array 
                    handleClick={this.props.toggleLocked} //toggle method
                    disabled={rollsLeft === 0 || gameOver}
                    rolling={isRolling}
                    />
                        <button
                            className='Game-reroll'
                            disabled={locked.every(x => x) || rollsLeft===0 || isRolling || gameOver}
                            onClick={this.props.animateRoll}
                        >
                            {this.displayRolls()}
                        </button>
                </section>
            </header>
        )
    }
}

export default Header
