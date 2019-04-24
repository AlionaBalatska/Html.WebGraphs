// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['ua-my', 2.6], //odesa
    ['ua-ks', 2.6], //kherson
    ['ua-kc', 2.9], //Misto Kyiv??
    ['ua-zt', 1.9], //zhitomyr
    ['ua-sm', 2.7], //sumy
    ['ua-dt', 0], //donetsk
    ['ua-dp', 2.7], //dripro
    ['ua-kk', 3.2],//Kharkiv
    ['ua-lh', 0],//luhansk
    ['ua-pl', 2.9],//polteva
    ['ua-zp', 2.6],//zaporihy
    ['ua-sc', 0],//sevastopol
    ['ua-kr', 0],//crim
    ['ua-ch', 2.7],//chernigiv
    ['ua-rv', 3],//rivne
    ['ua-cv', 2.8],//chernivci
    ['ua-if', 2.9],//IvanoFran
    ['ua-km', 3.1],//khmelnitski
    ['ua-lv', 3.2],//lviv
    ['ua-tp', 3],//ternopil
    ['ua-zk', 1],//zakarpatty
    ['ua-vo', 1],//volin
    ['ua-ck', 3], //cherkassy
    ['ua-kh', 2.7],//kirovohrad
    ['ua-kv', 2.9],//Kuiv
    ['ua-mk', 1],//mikolaiv
    ['ua-vi', 3.4]//вінниця
];

var cities = [
    "Вінниця",
    "Харків",
    "Львів",
    "Луцьк",
    "Хмельницький",
    "Тернопіль",
    "Рівне",
    "Маріуполь",
    "Черкаси",
    "Полтава",
    "Івано-Франківськ",
    "Сєвєродонецьк",
    "Житомир",
    "Київ",
    "Чернівці",
    "Ужгород",
    "Суми",
    "Дніпро",
    "Кіровоград",
    "Чернігів",
    "Запоріжжя",
    "Одеса",
    "Херсон",


];

var happiness = [
    3.4,
    3.2,
    3.2,
    3.1,
    3.1,
    3.0,
    3.0,
    3.0,
    3.0,
    2.9,
    2.9,
    2.9,
    2.9,
    2.9,
    2.8,
    2.7,
    2.7,
    2.7,
    2.7,
    2.7,
    2.6,
    2.6,
    2.6,
];

// Create the chart
Highcharts.mapChart('mapContainer', {
    chart: {
        map: 'countries/ua/ua-all',
        backgroundColor: '#323232',
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