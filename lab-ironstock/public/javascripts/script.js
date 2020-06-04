document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
}, false);

hbs.registerHelper("printChart", function printTheChart(stockData) {

  const dailyData = stockData['Time Series (Daily)'];

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => dailyData[date]['4. close']);

  //const ctx = document.getElementsByTagName('canvas').getContext('2d');
  /*var canvas = window.document.createElement("canvas");*/


  const canvasChart = new hbs.SafeString( `<canvas></canvas>`)
  const ctx =  canvasChart.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockDates,
        datasets: [
          {
            label: 'Stock Chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: stockPrices
          }
        ]
      }
    }); // closes chart = new Chart()
  })




  
