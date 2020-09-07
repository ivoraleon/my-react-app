import React from 'react';
import logo from './logo.svg';
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
  let adjective = 'cool';
  let url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name='Ivor' numberOfMessages={51} />
        <PeopleList people={people} />
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
