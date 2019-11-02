import React from 'react';

import { Alert, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from './Loading';

import widgetData from '../widget-data';

import './Widget.css';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            widget: null
        };
    }
    componentDidMount () {
        // TODO abstract into service call
        setTimeout(() => {
            this.setState({
                loading: false,
                widget: widgetData.find(widget => widget.id === this.props.match.params.id)
            })
        }, 300);
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
