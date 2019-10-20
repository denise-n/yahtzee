import React, { Component } from 'react'
import './GameOver.css'

class GameOver extends Component {
    handleClick = () => {
        const { playAgain } = this.props
        playAgain()
    }
    render() {
        const { scores } = this.props
        return (
            <div className="GameOver">
                <h1>GAME OVER</h1>
                <h2>Final Score: {Object.values(scores).reduce((a, b) => a + b)}</h2>
                <div className="Game-button-wrapper">
                    <button onClick={this.handleClick} className="play-again">Play Again?</button>
                </div>
            </div>
        )
    }
}

export default GameOver
