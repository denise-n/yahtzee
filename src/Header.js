import React, { Component } from 'react'
import Dice from "./Dice"
import './Header.css'

class Header extends Component {
    displayRolls = () => {
        const { rollsLeft, gameOver } = this.props
        if (gameOver) {
            return 'Out of Rolls!'
        }
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
            <header className='Game-header row w-100 justify-content-center m-0'>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <h1 className='col-12 Game-title'>Yahtzee!</h1>
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-6 Game-dice-section p-0">
                            <Dice
                                dice={dice} //array
                                locked={locked} //array 
                                handleClick={this.props.toggleLocked} //toggle method
                                disabled={rollsLeft === 0 || gameOver}
                                rolling={isRolling}
                            />
                        </div> {/* col */}
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-5">
                            <button
                                className='Game-reroll btn btn-outline-light m-3'
                                disabled={locked.every(x => x) || rollsLeft===0 || isRolling || gameOver}
                                onClick={this.props.animateRoll}
                            >
                                {this.displayRolls()}
                            </button>
                        </div> {/* col */}
                        
                    </div> {/* row */}

                </div> {/**container */}
            </header>
        )
    }
}

export default Header
