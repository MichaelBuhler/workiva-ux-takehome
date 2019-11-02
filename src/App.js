import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/layout/Header';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

import './App.css';

export default class extends React.Component {
    render () {
        return <Router>
            <div className="wrapper">
                <Header/>
            </div>
            <div className="wrapper">
                <Container/>
            </div>
            <div className="wrapper">
                <Footer/>
            </div>
        </Router>
    }
}
