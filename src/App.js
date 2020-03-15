import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User-Information/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PersonalFiles from './Components/PersonalFiles/PersonalFiles';
import IncomeInformation from './Components/IncomeInformation/IncomeInformation';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div >
       <Header></Header>
      <Router>
        <Switch>
            <Route path="/Users">
                <User></User>
            </Route>
            <Route path="/PersonalFiles">
                <PersonalFiles></PersonalFiles>  
            </Route>
            <Route path="/IncomeInformation">
                <IncomeInformation></IncomeInformation>
            </Route>
            <Route exact path="/">
                <User></User>
            </Route>
            <Route path="*">
               <NotFound></NotFound>
            </Route>
          </Switch>     
    </Router>
    
    
    </div>
  );
}

export default App;
