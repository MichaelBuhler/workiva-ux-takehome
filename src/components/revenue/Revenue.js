import React from 'react';

import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import RevenueByYearLineChart from './RevenueByYearLineChart';
import RevenueByCategoryColumnChart from './RevenueByCategoryColumnChart';
import RevenueByCategoryPieChart from './RevenueByCategoryPieChart';

import './Revenue.css';

export default class extends React.Component {
    render () {
        const navigate = (to) => {
            return () => {
                this.props.history.replace(to);
            };
        };
        return <div id="revenue">
            <Switch>
                <Redirect exact from="/revenue" to="/revenue/year"/>
                <Route exact path="/revenue/year">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button as="div" variant="primary">By Year</Button>
                            <Button as="div" variant="light" onClick={navigate('/revenue/category')}>By Category</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <RevenueByYearLineChart height="400px" width="100%"/>
                </Route>
                <Redirect exact from="/revenue/category" to="/revenue/category/column"/>
                <Route exact path="/revenue/category/column">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button as="div" variant="light" onClick={navigate('/revenue/year')}>By Year</Button>
                            <Button as="div" variant="primary">By Category</Button>
                        </ButtonGroup>
                        <ButtonGroup className="ml-2">
                            <Button as="div" variant="primary">Column Chart</Button>
                            <Button as="div" variant="light" onClick={navigate('/revenue/category/pie')}>Pie Chart</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <RevenueByCategoryColumnChart height="400px" width="100%" options={{legend:'none'}}/>
                </Route>
                <Route exact path="/revenue/category/pie">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button as="div" variant="light" onClick={navigate('/revenue/year')}>By Year</Button>
                            <Button as="div" variant="primary">By Category</Button>
                        </ButtonGroup>
                        <ButtonGroup className="ml-2">
                            <Button as="div" variant="light" onClick={navigate('/revenue/category/column')}>Column Chart</Button>
                            <Button as="div" variant="primary">Pie Chart</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <RevenueByCategoryPieChart height="400px" width="100%"/>
                </Route>
                <Redirect to="/revenue"/>
            </Switch>
        </div>
    }
}