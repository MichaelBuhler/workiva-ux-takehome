import React from 'react';

import siteSettings from "../site-settings";

export default class extends React.Component {
    render () {
        return <div id="header">
            <h1>{siteSettings.title}</h1>
        </div>
    }
}
