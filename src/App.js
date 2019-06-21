import React from 'react';
import './App.css';

function shuffleAdjectives(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function ARandomJakeBerg(){
  const adjectiveList = ["large", "big", "smiley", "[s t u p i d]", "red", "orange", "yellow", "green", "blue", "purple", "pink", "glittery", "teeny", "* t i n y *", "frowny", "excellent", "bad"];
  const chosenAdjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  return (<JakeBerg adjective={chosenAdjective}></JakeBerg>);
}

function JakeBerg(props){
  return (
    <div>
      <h1>My name is Ja Kob Mountain</h1>
      <p>I have a {props.adjective} face</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HELLO WORLD
        </p>
        <ARandomJakeBerg></ARandomJakeBerg>
      </header>
    </div>
  );
}

export default App;
