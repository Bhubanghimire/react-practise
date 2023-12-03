// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from "./components/Functional";
import Welcome from "./components/Classcomponent";


class App extends Component{
  render() {
    return (
        <div className="App">
                <Greet></Greet>
                <Welcome></Welcome>
        </div>
    );
  }
}

export default App;
