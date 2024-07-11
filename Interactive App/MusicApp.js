var csvFiles = [
  '../../CSV/Top10_Albums.csv',
  '../../CSV/Top10_selling_singles.csv',
  '../../CSV/Top10_streamed.csv'
];
var allData = [];
function loadCSVData(fileIndex) {
  console.log('Loading CSV file:', csvFiles[fileIndex]);
  d3.csv(csvFiles[fileIndex]).then(function(data) {
    console.log('Data Loaded:', data);
    allData.push(data);
    if (fileIndex < csvFiles.length - 1) {
      loadCSVData(fileIndex + 1);
    } else {
      console.log('All data loaded', allData);
      // You can process allData here
    }
  }).catch(function(error) {
    console.error('Error loading CSV file:', error);
  });
}
// Start loading the first file
loadCSVData(0);
console.log(allData)

// Create dropdown options
var select = document.getElementById('selDataset');
csvFiles.forEach(function(file, index) {
  var option = document.createElement('option');
  option.text = file.replace('../../CSV/', '').replace('.csv', '');
  option.value = index;
  select.add(option);
});

function optionChanged(value) {
  var selectedIndex = parseInt(value);
  var selectedData = allData[selectedIndex];
  updateList(selectedData, selectedIndex); // Pass selectedIndex as a parameter
}

function updateList(data, selectedIndex) {
  var tableElement = document.getElementById('list');
  tableElement.innerHTML = '';
  var table = document.createElement('table');
  table.className = 'table table-striped'; // Add some styling

  // Dynamically generate table headers
  var headerRow = document.createElement('tr');
  Object.keys(data[0]).forEach(function(key) {
    var th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Add data rows
  data.forEach(function(item, index) {
    var row = document.createElement('tr');
    Object.values(item).forEach(function(value) {
      var td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  tableElement.appendChild(table);

  // Create a bar chart
  var barData = [];
  var xValues;
  var yValues;
  var xAxisTitle;
  var yAxisTitle;

  switch (csvFiles[selectedIndex].replace('../../CSV/', '').replace('.csv', '')) {
    case 'Top10_Albums':
      xValues = data.map(function(item) {
        return item['Album'] + ' - ' + item['Artist'];
      });
      yValues = data.map(function(item) {
        return item['units'];
      });
      xAxisTitle = ' ';
      yAxisTitle = 'Units';
      break;
    case 'Top10_selling_singles':
      xValues = data.map(function(item) {
        return item['Song'] + ' - ' + item['Artist'];
      });
      yValues = data.map(function(item) {
        return item['Units'];
      });
      xAxisTitle = " ";
      yAxisTitle = 'Units';
      break;
    case 'Top10_streamed':
      xValues = data.map(function(item) {
        return item['Song'] + ' - ' + item['Artist'];
      });
      yValues = data.map(function(item) {
        return item['Streams'];
      });
      xAxisTitle = " ";
      yAxisTitle = 'Streams';
      break;
  }

  barData.push({
    x: xValues,
    y: yValues,
    type: 'bar'
  });

  var barLayout = {
    title: 'Bar Chart of Top 10 Lists',
    xaxis: {
      title: " "
    },
    yaxis: {
      title: yAxisTitle
    },
    barmode: 'group'
  };

  Plotly.newPlot('bar', barData, barLayout);
}
