var context = document.getElementById("schoolsCanvas");
context.style.backgroundColor = this.graphColor;

new Chart(context, {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Школа №1"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 147.3,
            y: 160.3,
            r: 98/10*2
          }]
        }, {
          label: ["Менахем"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 169.2,
            y: 144.1,
            r: 100/10*2
          }]
        }, {
          label: ["ФМГ №17"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#1000",
          data: [{
            x: 167.1,
            y: 147.9,
            r: 100/10*2
          }]
        }, {
          label: ["Техліцей"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 169.9,
            y: 152.1,
            r: 99/10*2
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Рейтинговий бал"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Бал ЗНО"
          }
        }]
      },
      responsive: false,
    }
});