import React from 'react';

import './App.css';
import Example1 from './page/home'
import ReducerDemo from "./page/example2";
import Example3 from "./page/example3/example3";

function App() {
  return (
    <div className="App">
      <h1>This is a test page</h1>
        <Example1></Example1>
        <ReducerDemo></ReducerDemo>
        <Example3></Example3>
    </div>
  );
}

export default App;
