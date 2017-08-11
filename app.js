Plotly.d3.csv('XYZ.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace1 = {
    x: unpack(rows, 'X'), y: unpack(rows, 'Y'), z: unpack(rows, 'Z'),
    mode: 'markers',
    marker: {
      size: 1,
      color: "rgb(68, 68, 68)"
    },
    type: 'scatter3d'
  };

  var data = [trace1];
  var layout = {
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0
    }
  };
  Plotly.newPlot('scatterplot', data, layout);
});