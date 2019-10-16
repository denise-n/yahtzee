import React, { Component } from 'react'
import Dice from "./Dice"
import './Header.css'

class Header extends Component {
    render() {
        const { dice, locked, rollsLeft, isRolling } = this.props
        const displayRolls = () => {
            if (rollsLeft === 3) return 'Starting'
            else if (rollsLeft === 2) return '2 Rolls Left'
            else if (rollsLeft === 1) return '1 Roll Left!'
            else return 'Out of Rolls!'
            }

        return (
            <header className='Game-header'>
                <h1 className='Game-title'>Yahtzee!</h1>
                <section className='Game-dice-section'>
                    <Dice
                    dice={dice} //array
                    locked={locked} //array 
                    handleClick={this.props.toggleLocked} //toggle method
                    disabled={rollsLeft === 0}
                    rolling={isRolling}
                    />
                    <div className='Game-button-wrapper'>
                        <button
                            className='Game-reroll'
                            disabled={locked.every(x => x) || rollsLeft===0 || isRolling}
                            onClick={this.props.animateRoll}
                        >
                            {displayRolls()}
                        </button>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header
