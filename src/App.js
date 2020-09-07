import React from 'react';
import logo from './logo.svg';
import CounterButton from './CounterButton';
import Greeting from './Greeting';
import PeopleList from './PeopleList';
import './App.css';

const people = [{
  name: 'John',
  age: 40,
  eyeColor: 'brown'
},
{
  name: 'Helga',
  age: 25,
  eyeColor: 'blue'
},
{
  name: 'Dwayne',
  age: 55,
  eyeColor: 'green'
}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
