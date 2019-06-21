import React from 'react';
import './App.css';

function ARandomJakeBerg(){
  const nameDoesntHaveToBeJakeBerg = ["Ellis Wyn James", "Jakob Mountain", "Benjamin B Benson-Randall", "Derds", "Conner", "literally Jake Berg"]
  const adjectiveList = ["large", "big", "smiley", "[s t u p i d]", "red", "orange", "yellow", "green", "blue", "purple", "pink", "glittery", "teeny", "* t i n y *", "frowny", "excellent", "bad"];
  const chosenAdjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  const chosenName = nameDoesntHaveToBeJakeBerg[Math.floor(Math.random() * nameDoesntHaveToBeJakeBerg.length)];
  return (<JakeBerg adjective={chosenAdjective} name={chosenName}></JakeBerg>);
}

function JakeBerg(props){
  return (
    <div>
      <h1>My name is {props.name}!</h1>
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
