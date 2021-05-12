import React from 'react';
import './App.css';

import Random from './components/Random';
import Tag from './components/Tag'

function App() {
  return (
    <div className="App">
      <h1>Random GIF Generator</h1>
      <div className="main-container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
