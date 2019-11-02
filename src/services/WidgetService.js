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
    static async getWidget (id) {
        const widgets = await fetchWidgets();
        return widgets.find(widget => widget.id === id);
    }
    static async getWidgets () {
        return await fetchWidgets();
    }
}