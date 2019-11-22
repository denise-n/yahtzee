import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Game from "./Game";
import HelpPage from './HelpPage'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App container-fluid p-0'>
        <Switch>
          <Route exact path='/' component={Game}/>
          <Route exact path='/help' component={HelpPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
