import React from 'react';
import './App.css';


function JakeBerg(props){
  return (
    <div>I have a {props.adjective} face</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HELLO WORLD
        </p>
        <JakeBerg adjective="smiley"></JakeBerg>
      </header>
    </div>
  );
}

export default App;
