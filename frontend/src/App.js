//import logo from './logo.svg';
//import './App.css';
//import ComponentRomantic from "./ComponentTitle/ComponentRomantic/ComponentRomantic";

import { Component } from "react";
import Detail from "./ComponentDetail/Detail";
import ComponentContent from "./ComponentHome/ComponentContent";
import ComponentHome from "./ComponentHome/ComponentHome";
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <>
      {/* <ComponentNavbar/> */}
      {/* <ComponentRomantic/> */}
      {/* <ComponentHome/> */}
      <ComponentContent/>
    </>
  );
}


export default App;
