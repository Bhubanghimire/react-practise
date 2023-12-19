// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import Greet from "./components/Functional";
// import Welcome from "./components/Classcomponent";
// import Hello from "./components/JSXexample";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/functionClick";
// import ClassClick from "./components/classClick";
import HandlerBind from "./components/handlerBind";
import ParentComponent from './components/ParentComponent';
import UserGreeting from "./components/UserGreeting";

class App extends Component{
  render() {
    return (
        <div className="App">
                {/*<Greet name="bhuban" lastName="ghimire">*/}
                {/*    <p> this is child paragraph </p>*/}
                {/*</Greet>*/}

                {/*<Greet name="saroj1" lastName="ghimire">*/}
                {/*    <h1> saroj greeting</h1>*/}
                {/*</Greet>*/}

                {/*<Greet name="sweta" lastName="Dhakal">*/}
                {/*    <button>Action</button>*/}
                {/*</Greet>*/}

                {/*<Greet name="dhakal">*/}
                {/*    <a href="http://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>*/}
                {/*</Greet>*/}
                {/*<Welcome name="class component"></Welcome>*/}
                {/*<Hello></Hello>*/}

            {/*    <FunctionClick></FunctionClick>*/}
            {/*<ClassClick />*/}
            <HandlerBind></HandlerBind>
            <ParentComponent></ParentComponent>

            {/*<Counter></Counter>*/}
            <UserGreeting></UserGreeting>
        </div>
    );
  }
}

export default App;
