var ctx = document.getElementById("lifeQualityCanvas").getContext('2d');

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
];

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: cities,
        datasets: [{
            label: '# of Votes',
            data: happiness,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        responsive: false
    }
});