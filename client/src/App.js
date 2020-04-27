import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo'
import Ptt from './Ptt/Ptt'
import Header from './Header'
import Page404 from './component/Page404'
import Home from './Home/Home'
import Project from './Project/Project';
import Practice_lifehacker from './Practice/Practice_lifehacker';
import Home_rev2 from './Home/Home_rev2';
import Timeline from './timeline/Timeline'


function App() {
  return (
    
    <Router>
      <>
      
      <Header/>
      {/* <div style={{paddingTop:'50px'}}> */}
      
      <Switch>
        <Route exact path="/">
          
          <Home_rev2/>
        </Route>
        <div style={{paddingTop:'70px'}}>
        <Route path="/project">
          <Project/>
        </Route>
        <Route path="/ptt">
          <Ptt/>
        </Route>
        <Route path="/todo">
          <Todo/>
        </Route>
        <Route path="/practice_lifehacker">
          <Practice_lifehacker/>
        </Route>
        <Route path="/timeline">
          <Timeline/>
        </Route>
        
        {/* <Route>
          <Page404/>
        </Route> */}
        </div>
        
      </Switch>
      {/* </div> */}
      </>
    </Router>
  );
}

export default App;
