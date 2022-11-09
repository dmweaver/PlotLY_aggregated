import Plotly from "plotly.js/dist/plotly";

const subject = ['Low','Optimum','High','Low','Optimum','High','Low','Optimum','High','Low','Optimum','High']
const score = [1,6,2,8,2,9,4,5,1,5,2,8]

const data = [{
  marker:{
    color: ['red', 'orange', 'green']
  },
  type: 'bar',
  x: subject,
  y: score,
  mode: 'markers',
  transforms: [{
    type: 'aggregate',
    groups: subject,
    aggregations: [
      {target: 'y', func: 'sum', enabled: true},
    ]
  }]
}];
const layout = {
  title: 'Phosphorus Status',
  width: 800,
  height: 600,
  font: {size: 14},
  xaxis: {linewidth: 2, showgrid: 'major'},
  yaxis: {linewidth: 2}
};
Plotly.newPlot('chart', data, layout, {displayModeBar: false});

