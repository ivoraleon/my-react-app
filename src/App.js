import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import CounterButtonPage from './pages/CounterButtonPage';
import { PeopleListPage } from './pages/PeopleListPage';
// import CounterButton from './CounterButton';
// import CongratulationsMessage from './CongratulationsMessage';
// import Greeting from './Greeting';
// import PeopleList from './PeopleList';
import './App.css';

function App() {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [hideMessage, setHideMessage] = useState(false);

  // const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Link to="/counter">Go to Counter Page</Link><br />
          <Link to="/people-list">Go to People List Page</Link>
          <HomePage />
        </Route>

        <Route path="/counter">
          <Link to="/">Go to Home Page</Link><br />
          <Link to="/people-list">Go to People List Page</Link>
          <CounterButtonPage />
        </Route>

        <Route path="/people-list">
          <Link to="/">Go to Home Page</Link><br />
          <Link to="/counter">Go to Counter Page</Link><br />
          <PeopleListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
