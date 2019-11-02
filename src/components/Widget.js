import React from 'react';

import { Alert, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import WidgetService from '../services/WidgetService';

import Loading from './Loading';

import './Widget.css';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            widget: null
        };
    }
    async componentDidMount () {
        const widget = await WidgetService.getWidget(this.props.match.params.id);
        this.setState({
            loading: false,
            widget: widget
        });
    }
    render () {
        const { loading, widget } = this.state;
        if (loading) {
            return <Loading/>
        }
        if (widget) {
            return <div id="widget">
                <div id="return-link">
                    <Link to="/widgets">Return to Widget List</Link>
                </div>
                <h2 id="widget-name">
                    {widget.name}{' '}
                    <Badge variant="secondary" className="text-monospace">{widget.id}</Badge>
                </h2>
                <p id="widget-description">
                    {widget.description}
                </p>
                <table id="widget-details">
                    <tbody>
                        <tr>
                            <td className="label">
                                Category
                            </td>
                            <td>
                                {widget.category}
                            </td>
                        </tr>
                        <tr>
                            <td className="label">
                                Revenue
                            </td>
                            <td>
                                <span className="money">{widget.revenue}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="label">
                                Timestamp
                            </td>
                            <td>
                                {widget.timestamp}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }
        return <div id="widget">
            <Alert variant="danger">Widget not found!</Alert>
        </div>
    }
}
