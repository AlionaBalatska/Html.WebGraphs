// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['ua-my', 1],
    ['ua-ks', 1],
    ['ua-kc', 24],
    ['ua-zt', 1],
    ['ua-sm', 1],
    ['ua-dt', 24],
    ['ua-dp', 1],
    ['ua-kk', 1],
    ['ua-lh', 1],
    ['ua-pl', 1],
    ['ua-zp', 1],
    ['ua-sc', 1],
    ['ua-kr', 1],
    ['ua-ch', 1],
    ['ua-rv', 24],
    ['ua-cv', 1],
    ['ua-if', 1],
    ['ua-km', 1],
    ['ua-lv', 1],
    ['ua-tp', 1],
    ['ua-zk', 2],
    ['ua-vo', 2],
    ['ua-ck', 2],
    ['ua-kh', 2],
    ['ua-kv', 2],
    ['ua-mk', 2],
    ['ua-vi', 2]
];

// Create the chart
Highcharts.mapChart('mapContainer', {
    chart: {
        map: 'countries/ua/ua-all',
        backgroundColor: '#0c0c0c',
    },

    title: {
        text: 'Динаміка зміни індексу задоволенності якістю сфер та послуг'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    exporting: { enabled: false },
    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Динаміка зміни індексу задоволенності якістю сфер та послуг',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }],

    rangeSelector: {
        selected: 4,
        inputEnabled: false,
        buttonTheme: {
            visibility: 'hidden'
        },
        labelStyle: {
            visibility: 'hidden'
        }
    }
});