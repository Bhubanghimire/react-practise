// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import Greet from "./components/Functional";
// import Welcome from "./components/Classcomponent";
// import Hello from "./components/JSXexample";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/functionClick";
// import ClassClick from "./components/classClick";
// import HandlerBind from "./components/handlerBind";
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/inline";
import './appStyle.css';
// import styles from  './appStyles.module.css';
// import Form from "./components/Form";
// import LifeCycleA from "./components/lifeCycleA";
// import LifecycleB from "./components/LifeCycleB";
// import FragmentDemo from "./components/FragmentDemo";
// import PureComp from "./components/PureComponent";
// import RefDemo from "./components/RefDemo";
import FRParentInput from "./components/FRParentInput";

class App extends Component{
  render() {
    return (
        <div className="App">
            <FRParentInput/>
            {/*<RefDemo/>*/}
            {/*<ParentComponent/>*/}
            {/*<PureComp/>*/}
            {/*<FragmentDemo/>*/}
            {/*<div>*/}
            {/*    <LifeCycleA/>*/}
            {/*    <LifecycleB/>*/}
            {/*</div>*/}
                {/*<Form/>*/}
                {/*<h1 className='error'>Error</h1>*/}
                {/*<h1 className={styles.success}> Success</h1>*/}
                {/*<Stylesheet primary = {true} />*/}
                {/*<Inline />*/}
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


        </div>
    );
  }
}

export default App;
