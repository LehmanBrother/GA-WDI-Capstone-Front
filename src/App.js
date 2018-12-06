import React, { Component } from 'react';
import './App.css';
import SunburstContainer from './SunburstContainer';
import CreateCRef from './CreateCRef';
import SelectionContainer from './SelectionContainer';
import GraphContainer from './GraphContainer';
import getCookie from 'js-cookie';
import apiUrl from './apiUrl';

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
      },
      mult1: 1,
      mult2: 1,
      mult3: 1,
      crefs: []
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
  updateMult = (a,b,c) => {
    console.log('updateMult called');
    this.setState({
      mult1: a,
      mult2: b,
      mult3: c
    })
  }
  getCRefs = async () => {
    const csrfCookie = getCookie('csrftoken');
    const crefs = await fetch(apiUrl + 'costs/crefs/', {
      credentials: 'include',
      headers: {
        'X-CSRFToken': csrfCookie
      }
    });
    const crefsParsedJSON = await crefs.json();
    return crefsParsedJSON
  }
  addCRef = async (cref, e) => {
    console.log('addcref called');
    e.preventDefault();
    try {
      const csrfCookie = getCookie('csrftoken');
      const createdCref = await fetch(apiUrl + 'costs/crefs/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(cref),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfCookie
        }
      });
      const parsedResponse = await createdCref.json();
      console.log(parsedResponse, 'pr');
      this.setState({crefs: [...this.state.crefs, parsedResponse.data]})
    } catch(err){
      console.log(err);
    }
  }
  componentDidMount(){
    this.getCRefs().then((crefs) => {
      this.setState({crefs: crefs.data})
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    console.log(this.state, 'app state');
    console.log(apiUrl, 'apiurl');
    return (
      <div className="App">
        <div className="mainContent">
          <div className="sunburstContainer">
            <SunburstContainer />
          </div>
          <div className="crudContainer">
            <CreateCRef addCRef={this.addCRef} />
          </div>
          <div className="variableContainer">
            <div className="selectionContainer">
              <SelectionContainer updateGraph={this.updateGraph} updateMult={this.updateMult} getCRefs={this.getCRefs} crefs={this.state.crefs}/>
            </div>
            <div className="graphContainer">
              <GraphContainer selection1={this.state.selection1} selection2={this.state.selection2} selection3={this.state.selection3} mult1={this.state.mult1} mult2={this.state.mult2} mult3={this.state.mult3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
