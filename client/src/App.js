import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterSelection from './components/CharacterSelection';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CharacterSelection} />
        <Route path="/game" component={GameScreen} />
      </Switch>
    </Router>
  );
};

export default App;
