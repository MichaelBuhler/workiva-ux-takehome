import React from 'react';

import { Link } from 'react-router-dom';

import './WidgetCard.css';

export default class extends React.Component {
    render () {
        const { widget } = this.props;
        return <Link to={`/widgets/${widget.id}`} className="widget-card">
            <div>
                <div className="top">{widget.name}</div>
                <div>{widget.description}</div>
                <div>
                    <span className="label">Revenue:</span>
                    <span className="value"><span className="money">{widget.revenue}</span></span>
                </div>
                <div className="bottom">
                    <span className="label">Timestamp:</span>
                    <span className="value">{widget.timestamp}</span>
                </div>
            </div>
        </Link>
    }
}
