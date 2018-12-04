import React, { Component } from 'react';
import './App.css';
import SunburstContainer from './SunburstContainer';
import SelectionContainer from './SelectionContainer';
import GraphContainer from './GraphContainer';
import Login from './Login';
import Registration from './Registration';
import getCookie from 'js-cookie';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
      <div>
        what did you do
      </div>
    )
}

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
  getToken = async () => {
    const token = await fetch('http://localhost:8000/users/getToken/', {
      method: 'get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const tokenResponse = token.json();
    return tokenResponse;
  }
  logout = async (e) => {
    e.preventDefault();
    const csrfCookie = getCookie('csrftoken');
    const loginResponse = await fetch('http://localhost:8000/users/logout/', {
      method: 'get',
      credentials: 'include',
      headers: {
        'X-CSRFToken': csrfCookie,
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await loginResponse.json();
    if(parsedResponse.data === 'logout successful'){
      console.log('successful logout');
      console.log(this.props.history.push('/'), 'props');
    } else {
      console.log(parsedResponse.error);
    }
  }
  componentDidMount(){
    this.getToken();
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
