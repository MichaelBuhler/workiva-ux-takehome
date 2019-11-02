import widgetData from '../widget-data';

const SIMULATED_DELAY = 300;

const fetchWidgets = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(widgetData);
        }, SIMULATED_DELAY);
    });
};

export default class {
    static async getRevenueByYear () {
        const widgets = await fetchWidgets();
        return widgets.reduce((acc, widget) => {
            const year = widget.timestamp.substring(0,4);
            acc[year] = acc[year] || 0;
            acc[year] += widget.revenue;
            return acc;
        }, {});
    }
    static async getWidget (id) {
        const widgets = await fetchWidgets();
        return widgets.find(widget => widget.id === id);
    }
    static async getWidgets () {
        return await fetchWidgets();
    }
}