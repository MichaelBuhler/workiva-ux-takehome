import React from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
