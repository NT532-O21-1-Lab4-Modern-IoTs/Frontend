import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Table from './pages/Table';
import Main from './pages/Main';
import Control from './pages/Control';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {


  return (


    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/table">
          <Table />
        </Route>
        <Route exact path="/Control">
          <Control />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
