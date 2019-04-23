var context = document.getElementById("populationCanvas");

var population = [6724, 10694, 30563, 52424, 93032, 121854, 211572, 314446, 374304, 356665, 372484];
var years = [1840, 1864, 1897, 1926, 1939, 1959, 1970, 1979, 1989, 2001, 2015];

context.style.backgroundColor = this.graphColor;
context.style.display = 'inline';

var myChart = new Chart(context, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: '# of Votes',
            data: population,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 127, 80, 0.2)',
                'rgba(255, 140, 0, 0.2)',
                'rgba(0, 100, 0, 0.2)',
                'rgba(72, 209, 204, 0.2)',
                'rgba(221, 160, 221, 0.2)',
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 127, 80, 1)',
                'rgba(255, 140, 0, 1)',
                'rgba(0, 100, 0, 1)',
                'rgba(72, 209, 204 1)',
                'rgba(221, 160, 221, 1)',
                

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});