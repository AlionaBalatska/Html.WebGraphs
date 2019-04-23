var context = document.getElementById("universitiesCanvas");
context.style.backgroundColor = this.graphColor;

var universityNames = [
  "Медичний університет ім.М.І.Пирогова", 
  "Національний технічний університете", 
  "Донецький національний університет ім.В.Стуса", 
  "Педагогічний університет ім.М.Коцюбинського", 
  "Аграрний університет",
  "Торговельно-економічний інститут",
  "Навчально-науковий інститут економіки Тернопільського університету"
];

var data = [
  458,
  368,
  356,
  337,
  210,
  57,
  14
];

new Chart(context, {
    type: 'pie',
    data: {
      labels: universityNames,
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#66CDAA","#FFC0CB"],
        data: [458,
          368,
          356,
          337,
          210,
          57,
          14
        ]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      responsive: false,
    }
});