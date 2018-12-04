import React, { Component } from 'react';
import './App.css';
import SunburstContainer from './SunburstContainer';
import SelectionContainer from './SelectionContainer';
import GraphContainer from './GraphContainer';
import getCookie from 'js-cookie';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // will contain amount #s from SelectionContainer to pass as props to GraphContainer
      selection1: {
        amount: 0,
        name: 'Column 1'
      },
      selection2: {
        amount: 0,
        name: 'Column 2'
      },
      selection3: {
        amount: 0,
        name: 'Column 3'
      }
    }
  }
  updateGraph = (a,b,c) => {
    console.log('updateGraph called');
    this.setState({
      selection1: a,
      selection2: b,
      selection3: c
    })
  }
  render() {
    console.log(this.state, 'app state');
    return (
      <div className="App">
        <div className="siteLogo">
          <h1>CostCompare</h1>
          <div className="mainContent">
            <div className="sunburstContainer">
              <SunburstContainer />
            </div>
            <div className="variableContainer">
              <div className="selectionContainer">
                <SelectionContainer updateGraph={this.updateGraph} />
              </div>
              <div className="graphContainer">
                <GraphContainer selection1={this.state.selection1} selection2={this.state.selection2} selection3={this.state.selection3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
