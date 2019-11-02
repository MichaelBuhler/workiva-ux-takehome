import React from 'react';
import './App.css';

import Header from './components/Header';
import Content from "./components/Content";

export default class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}
