import React, { Component } from 'react';
import './App.css';
import SunburstContainer from './SunburstContainer';
import SelectionContainer from './SelectionContainer';
import GraphContainer from './GraphContainer';
import getCookie from 'js-cookie';

class App extends Component {
  // without logging in, user will see sunburst, selection table, and graph and will be able to make selections that populate the graph
  // once logged in, user will also see input to add consumer references
  render() {
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
                <SelectionContainer />
              </div>
              <div className="graphContainer">
                <GraphContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
