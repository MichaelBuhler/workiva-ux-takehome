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
        const revenueByYear = await WidgetService.getRevenueByYear();
        const revenueByYearData = [['Year', 'Revenue']];
        Object.keys(revenueByYear).sort().forEach(year => {
            revenueByYearData.push([year, revenueByYear[year]]);
        });
        this.setState({
            loading: false,
            data: revenueByYearData
        })
    }
    render () {
        const { loading, data } = this.state;
        return loading ? <Loading/> : <Chart chartType="LineChart" data={data}/>
    }
}