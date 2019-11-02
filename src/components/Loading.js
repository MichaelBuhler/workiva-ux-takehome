import React from 'react';

import { Spinner } from 'react-bootstrap';

import './Loading.css';

export default class extends React.Component {
    render () {
        const { height, width } = this.props;
        return <div id="loading" style={{height, width}}>
            <Spinner animation="border"/>
        </div>
    }
}
