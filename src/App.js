import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

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
