import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from './Header'
import ScoreTable from './ScoreTable'
import GameOver from './GameOver'
import './Game.css'

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map(d => Math.floor(Math.random()*6) + 1), //makes an array of NUM_DICE(5) with random numbers
      locked: Array(NUM_DICE).fill(false), //makes array of NUM_DICE(5) dice where locked is initially false for each die 
      rollsLeft: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      gameOver: false
    };
  }
  
  componentDidMount() {
    this.animateRoll()
  }

  animateRoll = () => {
    
    this.setState({isRolling: true})
    setTimeout(() => {
      this.roll()
    }, 1000);
    
  }

  roll = (evt) => {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6) //rolls dice that aren't locked (for first roll this is all dice)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true), //lock all dice if 0 rolls left
      rollsLeft: st.rollsLeft - 1,
      isRolling: false
    }));
  }

  toggleLocked = (idx) => {
    // toggle whether idx is in locked or not
    // slices locked array to index element
    // toggles index element
    // rebuilds array with the toggled element
    const { rollsLeft } = this.state
    if (rollsLeft > 0) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }))
    // } else {
    //   this.setState({locked: [true, true, true, true, true]})
    }
  }

  doScore = async (rulename, ruleFn) => {
    // evaluate this ruleFn with the dice and score this rulename
    if(this.state.scores[rulename] === undefined) {
      this.setState(st => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false)
      }));
      await console.log(this.state.scores)
      this.checkGameOver();
    }
  }

  checkGameOver = () => {
    const { scores } = this.state
    const gameContinues = Object.values(scores).includes(undefined)
    !gameContinues
    ? this.setState({gameOver: true})
    : this.animateRoll()
  }

  playAgain = () => {
    this.setState({
      dice: Array.from({ length: NUM_DICE }).map(d => Math.floor(Math.random()*6) + 1), //makes an array of NUM_DICE(5) with random numbers
      locked: Array(NUM_DICE).fill(false), //makes array of NUM_DICE(5) dice where locked is initially false for each die 
      rollsLeft: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      gameOver: false
    })
    this.animateRoll()
  }

  render() {
    const { dice, locked, rollsLeft, isRolling, scores, gameOver } = this.state
  
    return (
        <div className="row w-100 justify-content-center h-100">
          <div className='Game col-md-12 col-lg-9 p-0'>
            <div className="container-fluid p-0 h-100">
              <Header 
                dice={dice} 
                locked={!gameOver? locked: Array(NUM_DICE).fill(true)} 
                rollsLeft={rollsLeft} 
                isRolling={isRolling} 
                gameOver={gameOver}
                animateRoll={this.animateRoll}
                toggleLocked={this.toggleLocked}
              />
              {!gameOver 
                ? <ScoreTable doScore={this.doScore} scores={scores} isRolling={isRolling} playAgain={this.playAgain} gameOver={gameOver} /> 
                : <GameOver playAgain={this.playAgain} scores={scores}/>}
            </div>
          </div>
          {/* <div className="Game-help-wrapper">
            <Link to='/help'><button className="btn btn-dark Game-help">?</button></Link>
          </div> */}
        </div>
     
    )
  }
}

export default Game;
