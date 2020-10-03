import React from 'react';

import './App.css';
import Example1 from './page/home'
import ReducerDemo from "./page/example2";
import Example3 from "./page/example3/example3";
import Example4 from "./page/example4";

function App() {
  return (
    <div className="App">
      <h1>This is a test page</h1>
        <Example1></Example1>
        <ReducerDemo></ReducerDemo>
        <Example3></Example3>
        <Example4></Example4>
    </div>
  );
}

export default App;
