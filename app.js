Plotly.d3.csv('XYZ_CSTONE_BONE.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace0 = {
    name: 'Area of Interest',
    x: [1480, 1490],
    y: [1290, 1300],
    z: [94, 104],
    mode: 'markers',
    marker: {
      size: 2,
      color: "rgb(0, 0, 0)"
    },
    type: 'scatter3d'
  };

  var trace1 = {
    name: 'Chipped Stone',
    x: unpack(rows, 'CStoneX'),
    y: unpack(rows, 'CStoneY'),
    z: unpack(rows, 'CStoneZ'),
    mode: 'markers',
    marker: {
      size: 2,
      color: "rgb(172, 122, 0)"
    },
    type: 'scatter3d'
  };

  var trace2 = {
    name: 'Bone',
    x: unpack(rows, 'BoneX'),
    y: unpack(rows, 'BoneY'),
    z: unpack(rows, 'BoneZ'),
    mode: 'markers',
    marker: {
      size: 2,
      color: "rgb(68, 68, 68)"
    },
    type: 'scatter3d'
  };

  var data = [trace0, trace1, trace2];
  var layout = {
    title: 'Hell Gap Scatterplot',
    scene: {
      xaxis: {
        dtick: 1
      },
      yaxis: {
        dtick: 1
      },
      zaxis: {
        dtick: 1
      }
    }
  };
  Plotly.newPlot('scatterplot', data, layout);
});