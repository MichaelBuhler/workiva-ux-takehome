import React from 'react';

import siteSettings from '../../site-settings';

import "./Footer.css"

export default class extends React.Component {
    render () {
        return <div id="footer">
            &copy; 2019 {siteSettings.company} and {siteSettings.author}
        </div>
    }
}
