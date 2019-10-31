(function() {

    google.charts.load('current',{'packages':['corechart']});

    google.charts.setOnLoadCallback(renderAllCharts);

    function renderAllCharts () {
        renderRevenueByCategoryColumnChart();
        renderRevenueByCategoryPieChart();
        renderRevenueByYearLineChart();
    }

    const whenRevenueByCategoryData = ajax.get('/api/revenueByCategory').then(revenueByCategory => {
        const revenueByCategoryData = [['Category', 'Revenue']];
        Object.keys(revenueByCategory).sort().forEach(category => {
            revenueByCategoryData.push([category, revenueByCategory[category]]);
        });
        return revenueByCategoryData;
    });

    const whenRevenueByYearData = ajax.get('/api/revenueByYear').then(revenueByYear => {
        const revenueByYearData = [['Year', 'Revenue']];
        Object.keys(revenueByYear).sort().forEach(year => {
            revenueByYearData.push([year, revenueByYear[year]]);
        });
        return revenueByYearData;
    });

    function renderRevenueByCategoryColumnChart () {
        const element = document.getElementById('revenueByCategoryColumnChart');
        const chart = new google.visualization.ColumnChart(element);
        whenRevenueByCategoryData.then(data => {
            const dataTable = google.visualization.arrayToDataTable(data);
            chart.draw(dataTable);
        });
    }

    function renderRevenueByCategoryPieChart () {
        const element = document.getElementById('revenueByCategoryPieChart');
        const chart = new google.visualization.PieChart(element);
        whenRevenueByCategoryData.then(data => {
            const dataTable = google.visualization.arrayToDataTable(data);
            chart.draw(dataTable);
        });
    }

    function renderRevenueByYearLineChart () {
        const element = document.getElementById('revenueByYearLineChart');
        const chart = new google.visualization.LineChart(element);
        whenRevenueByYearData.then(data => {
            const dataTable = google.visualization.arrayToDataTable(data);
            chart.draw(dataTable);
        });
    }

})();
