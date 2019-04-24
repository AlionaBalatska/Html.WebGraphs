var context = document.getElementById("budgetCanvas");
context.style.backgroundColor = this.graphColor;
context.style.display = 'inline';

new Chart(context, {
    type: 'line',
    data: {
      labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
      datasets: [{ 
          data: [18,20,15,12,23,27,29,32,33,35],
          label: "Охорона здоров'я",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [10,14,12,16,18,16,19,20,22,23],
          label: "Управління доріг",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [11,12,10,15,16,20,21,19,20,23],
          label: "Освіта",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [2,4,1,6,8,4,7,2,3,5],
          label: "Соціальний захист",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,4,2,2,7,6,4,5,5,4],
          label: "культура",
          borderColor: "#c45850",
          fill: false
        },{ 
            data: [6,5,1,6,3,2,5,3,3,4],
            label: "Будівництво та містобудування",
            borderColor: "#FFA07A",
            fill: false
          },  
        
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Видатки за галузевою структурою у %'
      },
      responsive: false,
    }
  });