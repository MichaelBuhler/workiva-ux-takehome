import React from 'react';

import { Chart } from 'react-google-charts';

import WidgetService from '../services/WidgetService';

import Loading from './Loading';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
    }
    async componentDidMount () {
        const revenueByCategory = await WidgetService.getRevenueByCategory();
        const revenueByCategoryData = [['Category', 'Revenue']];
        Object.keys(revenueByCategory).sort().forEach(category => {
            revenueByCategoryData.push([category, revenueByCategory[category]]);
        });
        this.setState({
            loading: false,
            data: revenueByCategoryData
        })
    }
    render () {
        const { ...rest } = this.props;
        const { loading, data } = this.state;
        return loading ? <Loading/> : <Chart chartType="PieChart" data={data} {...rest}/>
    }
}