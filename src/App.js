// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from "./components/Functional";
import Welcome from "./components/Classcomponent";
import Hello from "./components/JSXexample";

class App extends Component{
  render() {
    return (
        <div className="App">
                <Greet></Greet>
                <Welcome></Welcome>
                <Hello></Hello>
        </div>
    );
  }
}

export default App;
