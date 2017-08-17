Plotly.d3.csv('XYZ_CSTONE_BONE.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace1 = {
    x: unpack(rows, 'CStoneX'), y: unpack(rows, 'CStoneY'), z: unpack(rows, 'CStoneZ'),
    mode: 'markers',
    marker: {
      size: 1.5,
      color: "rgb(172, 122, 0)"
    },
    type: 'scatter3d'
  };

  var trace2 = {
    x: unpack(rows, 'BoneX'), y: unpack(rows, 'BoneY'), z: unpack(rows, 'BoneZ'),
    mode: 'markers',
    marker: {
      size: 1.5,
      color: "rgb(68, 68, 68)"
    },
    type: 'scatter3d'
  };

  var data = [trace1, trace2];
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