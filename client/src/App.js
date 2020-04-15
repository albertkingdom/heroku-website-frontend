import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo'
import Ptt from './Ptt/Ptt'
import Header from './Header'
import Page404 from './component/Page404'


function App() {
  return (
    
    <Router>
      <>
      <Header/>
      <div style={{paddingTop:'50px'}}>
      <Switch>
        <Route path="/">
          <Ptt/>
        </Route>
        <Route path="/ptt">
          <Ptt/>
        </Route>
        <Route path="/todo">
          <Todo/>
        </Route>
        <Route>
          <Page404/>
        </Route>
        
      </Switch>
      </div>
      </>
    </Router>
  );
}

export default App;
