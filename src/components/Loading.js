import React from 'react';

import { Spinner } from 'react-bootstrap';

import './Loading.css';

export default class extends React.Component {
    render () {
        return <div id="loading">
            <Spinner animation="border"/>
        </div>
    }
}