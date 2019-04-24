var context = document.getElementById("schoolsCanvas");
context.style.backgroundColor = this.graphColor;
context.style.display = 'inline';

new Chart(context, {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Гуманітарна гімназія №1 ім.М.І.Пирогова"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 160.3,
            y: 147.3,
            r: 98/10*2
          }]
        }, {
          label: ["НВК Ор Менахем"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 169.2,
            y: 144.1,
            r: 100/10*2
          }]
        }, {
          label: ["ФМГ №17"],
          backgroundColor: "rgba(255, 0, 255,0.2)",
          borderColor: "rgba(255, 0, 255,1)",
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
        }, {
          label: ["ЗОШ І-ІІІ ст.-ліцей №7"],
          backgroundColor: "rgba(138,90,32,0.2)",
          borderColor: "rgba(138,90,32,1)",
          data: [{
            x: 157.6,
            y: 142.5,
            r: 99/10*2
          }]
        }, {
          label: ["ЗОШ І-ІІІ ст.-гімназія №23"],
          backgroundColor: "rgba(34, 139, 34, 0.2)",
          borderColor: "rgba(34, 139, 34,1)",
          data: [{
            x: 158,
            y: 141.3,
            r: 99/10*2
          }]
       
        }, {
          label: ["ЗОШ І-ІІІ ст.-№4 ім.Д.І.Менделєєва"],
          backgroundColor: "rgba(128, 0, 0, 0.2)",
          borderColor: "rgba(128, 0, 0,1)",
          data: [{
            x: 150.7,
            y: 133.7,
            r: 99/10*2
          }]
        }, {
          label: ["ЗОШ І-ІІІ ст.-гімназія №2"],
          backgroundColor: "rgba(0, 191, 255, 0.2)",
          borderColor: "rgba(0, 191, 255,1)",
          data: [{
            x: 153.3,
            y: 132.6,
            r: 99/10*2
          }]
        }, {
          label: ["ЗОШ І-ІІІ ст.-гімназія №26"],
          backgroundColor: "rgba(0, 255, 127, 0.2)",
          borderColor: "rgba(0, 255, 127,1)",
          data: [{
            x: 150.3,
            y: 132.1,
            r: 99/10*2
          }]
        }, {
          label: ["НВК Школа АІСТ:Центр розвитку дитини"],
          backgroundColor: "rgba(250, 235, 215, 0.2)",
          borderColor: "rgba(250, 235, 215,1)",
          data: [{
            x: 153.5,
            y: 131.7,
            r: 99/10*2
          }]
        }
        
      ]
    },
    options: {
      title: {
        display: true,
        text: 'за 2017 н.р.'
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