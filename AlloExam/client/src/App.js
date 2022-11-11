import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';
import TestPage from './components/TestPage/TestPage';


import logo from './logo.svg';
import './App.scss';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route  exact path="/">
          <HomePage />
        </Route>
        <Route>
          <NoMatch />
        </Route>
        <Route exact path="">
          <TestPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
