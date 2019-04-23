var context = document.getElementById("lifeQualityCanvas");
context.style.display = 'inline';

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

var myChart = new Chart(context.getContext('2d'), {
    type: 'horizontalBar',
    data: {
        labels: cities,
        datasets: [{
            label: "Індекс задоволенності якістю сфер та послуг",
            data: happiness,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(138, 43, 226, 0.2)',
                'rgba(255, 169, 64, 0.2)',
                'rgba(255, 59, 94, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 109, 24, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(175, 109, 64, 0.2)',
                'rgba(255, 150, 94, 0.2)',
                'rgba(255, 15, 69, 0.2)',
                'rgba(255, 105, 99, 0.2)',
                'rgba(155, 15, 79, 0.2)',
                'rgba(178, 15, 90, 0.2)',
                'rgba(154, 5, 69, 0.2)',
                'rgba(255, 150, 9, 0.2)',
                'rgba(129, 1, 69, 0.2)',
                'rgba(25, 105, 69, 0.2)',
                'rgba(155, 15, 169, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(138, 43, 226, 1)',
                'rgba(255, 169, 64, 1)',
                'rgba(255, 59, 94, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 109, 24, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(175, 109, 64, 1)',
                'rgba(255, 150, 94, 1)',
                'rgba(255, 15, 69, 1)',
                'rgba(255, 105, 99, 1)',
                'rgba(155, 15, 79, 1)',
                'rgba(178, 15, 90, 1)',
                'rgba(154, 5, 69, 1)',
                'rgba(255, 150, 9, 1)',
                'rgba(129, 1, 69, 1)',
                'rgba(25, 105, 69, 1)',
                'rgba(155, 15, 169, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
    }
});