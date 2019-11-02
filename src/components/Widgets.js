import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import WidgetService from '../services/WidgetService';

import Loading from './Loading';
import WidgetCard from './WidgetCard';

import './Widgets.css';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            widgets: []
        };
    }
    async componentDidMount () {
        const widgets = await WidgetService.getWidgets();
        this.setState({
            loading: false,
            widgets: widgets
        });
    }
    render () {
        if (this.state.loading) {
            return <Loading/>
        }
        const widgets = this.state.widgets.map(widget => {
            return <Col md={4} sm={6} xs={12} key={widget.id}>
                <WidgetCard widget={widget}/>
            </Col>
        });
        return <div id="widgets">
            <Container>
                <Row noGutters>
                    {widgets}
                </Row>
            </Container>
        </div>
    }
}
