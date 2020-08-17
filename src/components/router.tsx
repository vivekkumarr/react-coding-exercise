import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ItemData from './item-data';
import App from '../App';
  
function RouterComponent() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/item" component={ItemData} />
            </Switch>
        </Router>
    );
} 

export default RouterComponent;