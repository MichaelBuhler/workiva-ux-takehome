import React from 'react';
import "./Footer.css"

import siteSettings from '../site-settings';

export default class Footer extends React.Component {
    render () {
        return (
            <div id="footer" className="wrapper">
                &copy; 2019 {siteSettings.company} and {siteSettings.author}
            </div>
        );
    }
}
