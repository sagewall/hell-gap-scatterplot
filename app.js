(function() {

  var d3 = Plotly.d3;

  var WIDTH_IN_PERCENT_OF_PARENT = 80,
    HEIGHT_IN_PERCENT_OF_PARENT = 80;

  var gd3 = d3.select('#scatterplot-container')
    .append('div')
    .style({
      width: WIDTH_IN_PERCENT_OF_PARENT + '%',
      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

  var gd = gd3.node();

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
        size: 1,
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
        size: 1,
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
    Plotly.newPlot(gd, data, layout);
  });

  window.onresize = function() {
    Plotly.Plots.resize(gd);
  };

})();