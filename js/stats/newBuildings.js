var context = document.getElementById("newBuildingsCanvas");
context.style.backgroundColor = this.graphColor;

var buildings = ["Авалон", "Європейський квартал", "Андора", "Сімейний комфорт", "Династія","Барський","Green`s","Premier Tower","TURKIS CITY","Комфорт"];
var percentage = [17.4, 14.5, 10.7, 10.2, 9.2, 9.2, 8, 7.4, 6.8, 6.6,];

var myDoughnutChart = new Chart(context, {
  type: 'doughnut',
  data: {
    labels: buildings,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
        "#3e95cd", 
        "#8e5ea2", 
       "#3cba9f",
       "#e8c3b9", 
       "#c45850", 
       "#3CB371", 
       "#FFD700",
       "#E6E6FA",
       "#DEB887",
       "#B0E0E6",
      ],
        data: percentage
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
      responsive: false,
      maintainAspectRatio: false
    }
  }
});