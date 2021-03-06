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
                'rgba(240, 128, 128, 0.2)',
                'rgba(144, 238, 144, 0.2)',
                'rgba(102, 205, 170, 0.2)',
                'rgba(255, 182, 193, 0.2)',
                'rgba(255, 215, 0, 0.2)',
                'rgba(135, 206, 250, 0.2)',
                'rgba(220, 20, 60, 0.2)',
                'rgba(238, 232, 170, 0.2)',
                'rgba(0, 191, 255, 0.2)',
                'rgba(244, 164, 96, 0.2)',
                'rgba(148, 0, 211, 0.2)',
                'rgba(255, 240, 245, 0.2)',
                'rgba(144, 238, 144, 0.2)',
                'rgba(245, 255, 250, 0.2)',
                'rgba(173, 255, 47, 0.2)',
                'rgba(221, 160, 221, 0.2)',
                'rgba(176, 196, 222, 0.2)',
                'rgba(0, 250, 154, 0.2)',
                'rgba(255, 140, 0, 0.2)',
                'rgba(221, 160, 221, 0.2)',
                'rgba(30, 144, 255, 0.2)',
                'rgba(255, 228, 225, 0.2)',
                'rgba(199, 21, 133, 0.2)',
            ],
            borderColor: [
                'rgba(240, 128, 128,1)',
                'rgba(144, 238, 144, 1)',
                'rgba(102, 205, 170, 1)',
                'rgba(255, 182, 193, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(135, 206, 250, 1)',
                'rgba(220, 20, 60, 1)',
                'rgba(238, 232, 170, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(244, 164, 96, 1)',
                'rgba(148, 0, 211, 1)',
                'rgba(255, 240, 245, 1)',
                'rgba(144, 238, 144, 1)',
                'rgba(245, 255, 250, 1)',
                'rgba(173, 255, 47, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(176, 196, 222, 1)',
                'rgba(0, 250, 154, 1)',
                'rgba(255, 140, 0, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(30, 144, 255, 1)',
                'rgba(255, 228, 225, 1)',
                'rgba(199, 21, 133, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
    }
});