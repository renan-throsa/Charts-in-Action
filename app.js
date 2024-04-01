let reponse = {
    "ds_code": "GL10",

    "day": "2023-08-28",

    "hour": 14,

    "analysis": {

        "samples": [

            45.65574324782004,

            41.77371021682131,

            47.81096464232933,

            45.65122131036762,

            45.6593808632078,

            45.26533949874616,

            45.006171945959174,

            41.602829157056675,

            45.982569294119614,

            41.9553955475222,

            50.31996402418976,

            43.60550740202701,

            43.705586212442476,

            47.99958927857815,

            41.55455095595352,

            40.51230250049257,

            44.80518180408507,

            48.60378902027224,

            46.692030649917385,

            45.674785096531714,

            44.74720133941719,

            46.53293809865648,

            44.79995086690913,

            46.62016053098447,

            41.116530937490154,

            47.89705202120426,

            48.46103218611676,

            47.317089652998895,

            41.74714452823784,

            47.13046857028477,

            42.500393114958754,

            46.76708403211044,

            45.53009529390825,

            43.77168755754762,

            40.97375087871503,

            42.15123007673163,

            48.999482337684576,

            40.97328507146469,

            49.3096069349783,

            38.18468155585056

        ],

        "boxplot_stats": {

            "lower_bound": 34.96878336109214,

            "q1": 42.10227144442927,

            "median": 45.39771739632721,

            "q3": 46.85793016665402,

            "upper_bound": 53.99141824999115,

            "outliers": [],

            "analysis_quality": 1

        },

        "gaussian_stats": {

            "mean": 44.88,

            "std": 2.85

        },

        "temporal_stats": {

            "model": "add",

            "trend": [

                45.65574324782004,

                43.71472673232067,

                45.080139368990224,

                45.222909854334574,

                45.310204056109214,

                45.302726629882045,

                45.260361675035924,

                44.80317011028851,

                44.93421446404753,

                44.63633257239499,

                45.15302634073997,

                45.02406642918056,

                44.92264487404686,

                45.10294072256671,

                45.086082317884575,

                44.52464676851252,

                44.459566806490784,

                44.68605974164958,

                44.7958052148166,

                44.84723699562987,

                45.08911177888837,

                45.13144784077583,

                45.35025978842097,

                45.065659519712874,

                44.87419979167158,

                45.19662023849941,

                45.23211584677161,

                45.67538805423664,

                45.77037590252474,

                45.94924411530933,

                45.47975212259291,

                45.48552545968468,

                45.47439547486749,

                45.39935595318522,

                44.97172616703588,

                44.7679784139453,

                44.95100316830685,

                44.939984255535656,

                45.048642325825966,

                44.258153815805485

            ],

            "seasonality": [

                47.37212157083832,

                43.54845027525791,

                43.35680389035324,

                45.86229056157915,

                45.587854332812924,

                46.24148472692466,

                45.40368411213305,

                43.373906018007155,

                44.49641942383038,

                42.96885883038765,

                48.64653563095294,

                41.898441136993945,

                46.970748389541676,

                47.37212157083832,

                43.54845027525791,

                43.35680389035324,

                45.86229056157915,

                45.587854332812924,

                46.24148472692466,

                45.40368411213305,

                43.373906018007155,

                44.49641942383038,

                42.96885883038765,

                48.64653563095294,

                41.898441136993945,

                46.970748389541676,

                47.37212157083832,

                43.54845027525791,

                43.35680389035324,

                45.86229056157915,

                45.587854332812924,

                46.24148472692466,

                45.40368411213305,

                43.373906018007155,

                44.49641942383038,

                42.96885883038765,

                48.64653563095294,

                41.898441136993945,

                46.970748389541676,

                47.37212157083832

            ],

            "noise": [

                -47.37212157083832,

                -45.48946679075728,

                -40.625978617014134,

                -45.43397910554611,

                -45.23867752571434,

                -46.27887185806055,

                -45.6578738412098,

                -46.57424697123899,

                -43.448064593758296,

                -45.64979585526044,

                -43.47959794750315,

                -43.317000164147494,

                -48.18780705114606,

                -44.475473014826875,

                -47.079981637188965,

                -47.36914815837319,

                -45.51667556398486,

                -41.670125054190265,

                -44.34525929182388,

                -44.576136011231206,

                -43.71581645747834,

                -43.09492916594973,

                -43.519167751899495,

                -47.09203461968134,

                -45.65610999117537,

                -44.27031660683683,

                -44.14320523149317,

                -41.90674867649566,

                -47.38003526464014,

                -44.68106610660371,

                -48.56721334044708,

                -44.9599261544989,

                -45.34798429309229,

                -45.001574413644754,

                -48.494394712151234,

                -45.585607167601324,

                -44.59805646157521,

                -45.865140321064914,

                -42.709783780389344,

                -53.44559383079324

            ]

        }

    }

}

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create a new matrix with swapped dimensions
    const transposedMatrix = []
    for (let i = 0; i < numCols; i++) {
        transposedMatrix[i] = new Array(numRows);
    }

    // Copy values from the original matrix to the transposed matrix
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}


window.onload = () => {

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawBoxPlot);
    google.charts.setOnLoadCallback(drawDistChart);
    google.charts.setOnLoadCallback(drawLineChart);


    function drawDistChart() {
        let arr = [['Sample'], ...reponse.analysis.samples.map(x => [x])];
        
        let data = google.visualization.arrayToDataTable(arr);

        let options = {
            title: 'Distribuição',            
            colors: ['green'],
            hAxis: { title: 'amostra' },
            vAxis: { title: 'contagem' },
        };

        let chart = new google.visualization.Histogram(document.getElementById('dist_chart'));

        chart.draw(data, options);
    }

    function drawLineChart() {

        let matrix = [[...reponse.analysis.samples],
        [...reponse.analysis.temporal_stats.trend],
        [...reponse.analysis.temporal_stats.seasonality]]

        matrix = transposeMatrix(matrix)

        matrix.forEach((row, index) => {
            row.unshift(index)
        });

        let data = google.visualization.arrayToDataTable([
            ['X-axis', 'Amostras', 'Tendências', 'Sazionalidade'],
            ...matrix
        ]);


        let options = {
            title: 'Tendencia temporal',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        let chart = new google.visualization.LineChart(document.getElementById('line_chart'));

        chart.draw(data, options);
    }


    function drawBoxPlot() {

        let columns = []

        columns.push({
            label: 'Day',
            type: 'string'
        })

        reponse.analysis.samples.forEach((s, index) => {
            columns.push({
                label: `Sample` + index,
                type: 'number'
            })
        })

        columns.push({
            label: 'Min',
            id: 'min',
            type: 'number',
            role: 'interval'
        },
        {
            label: '1st Q',
            id: 'firstQuartile',
            type: 'number',
            role: 'interval'
        },
        {
            label: 'Median',
            id: 'median',
            type: 'number',
            role: 'interval'
        },
        {
            label: '3rd Q',
            id: 'thirdQuartile',
            type: 'number',
            role: 'interval'
        },
        {
            label: 'Max',
            id: 'max',
            type: 'number',
            role: 'interval'
        })

        let rows = [];
        rows.push(reponse.day)
        rows.push(...reponse.analysis.samples)
        rows.push(reponse.analysis.boxplot_stats.lower_bound, reponse.analysis.boxplot_stats.q1, reponse.analysis.boxplot_stats.median, reponse.analysis.boxplot_stats.q3, reponse.analysis.boxplot_stats.upper_bound)

        console.log([
            columns,
            rows,
        ]);
        var data = google.visualization.arrayToDataTable(
            [
                columns,
                rows,
            ]);

        var options = {
            title: 'Box Plot',
            legend: {
                position: 'none'
            },
            lineWidth: 0,
            intervals: {
                barWidth: 0.5,
                boxWidth: 0.5,
                lineWidth: 2,
                style: 'boxes',
                color: "#00468b",
                fillOpacity: 1,
            },
            interval: {
                max: {
                    style: 'bars',                    
                    color: 'gray'
                },
                min: {
                    style: 'bars',
                    color: 'gray'
                }
            }
        };


        var chart = new google.visualization.LineChart(document.getElementById('disp_chart'));
        chart.draw(data, options);
    }



}