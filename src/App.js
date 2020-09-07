import React, { useState } from 'react';
import logo from './logo.svg';
import CounterButton from './CounterButton';
import CongratulationsMessage from './CongratulationsMessage';
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
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
