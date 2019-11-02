import React from 'react';

import { Link } from 'react-router-dom';

export default class extends React.Component {
    render () {
        const { active, children, className, ...rest } = this.props;
        let clazzName = `nav-link ${active?'active':''} ${className}`;
        return <Link className={clazzName} {...rest}>
            {children}
        </Link>
    }
}
