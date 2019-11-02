import React from 'react';

import { Nav } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import NavLink from './NavLink';

export default class extends React.Component {
    render () {
        return <Nav variant="tabs">
            <Nav.Item>
                <Switch>
                    <Route path="/widgets">
                        <NavLink to="/widgets" active>Widgets</NavLink>
                    </Route>
                    <Route>
                        <NavLink to="/widgets">Widgets</NavLink>
                    </Route>
                </Switch>
            </Nav.Item>
            <Nav.Item>
                <Switch>
                    <Route exact path="/revenue">
                        <NavLink to="/revenue" active>Revenue</NavLink>
                    </Route>
                    <Route>
                        <NavLink to="/revenue">Revenue</NavLink>
                    </Route>
                </Switch>
            </Nav.Item>
        </Nav>
    }
}
