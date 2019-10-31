(function() {

    google.charts.load('current',{'packages':['corechart']});

    google.charts.setOnLoadCallback(renderAllCharts);

    function renderAllCharts () {
        renderRevenueByYearLineChart();
    }

    const whenRevenueByYearData = ajax.get('/api/revenueByYear').then(revenueByYear => {
        const revenueByYearData = [['Year', 'Revenue']];
        Object.keys(revenueByYear).sort().forEach(year => {
            revenueByYearData.push([year, revenueByYear[year]]);
        });
        return revenueByYearData;
    });
    function renderRevenueByYearLineChart () {
        const element = document.getElementById('revenueByYearLineChart');
        const chart = new google.visualization.LineChart(element);
        whenRevenueByYearData.then(data => {
            const dataTable = google.visualization.arrayToDataTable(data);
            chart.draw(dataTable);
        });
    }

})();
