import './App.scss';
import Navigation from './Navigation';
import Gene from './pages/Gene';
import Paul from './pages/Paul';
import Ace from './pages/Ace';
import Peter from './pages/Peter';
import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/gene">
          <Gene />
        </Route>
        <Route path="/paul">
          <Paul />
        </Route>
        <Route path="/ace">
          <Ace />
        </Route>
        <Route path="/peter">
          <Peter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
