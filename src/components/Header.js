import React from 'react';
import './Header.css';

import siteSettings from "../site-settings";

export default class Header extends React.Component {
    render () {
        return (
            <div id="Header" className='wrapper'>
                <h1>{siteSettings.title}</h1>
                {/*<div id="nav">
                    <%- include('nav'); %>
                </div>*/}
            </div>
        );
    }
}
