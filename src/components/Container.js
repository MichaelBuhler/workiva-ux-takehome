import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Widget from './Widget';
import Widgets from './Widgets';
import Revenue from './Revenue';

import './Container.css';

export default class extends React.Component {
    render () {
        return <div id="container">
            <Navigation/>
            <div className="content">
                <Switch>
                    <Redirect exact from="/" to="/widgets"/>
                    <Route exact path="/widgets" component={Widgets}/>
                    <Route path="/widgets/:id" component={Widget}/>
                    <Route path="/revenue" component={Revenue}/>
                    <Redirect to="/widgets"/>
                </Switch>
            </div>
        </div>
    }
}
