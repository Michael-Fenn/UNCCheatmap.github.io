// Initialize and add the map
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.js';
document.getElementsByTagName('head')[0].appendChild(script);

mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
});

//placeholder values
var very_high = 1000;
var high = 800;
var medium = 600;
var low = 400;
var very_low = 200;
//current building names: "uncc"(union), chhs, cato, woodward, bioinformatics, prospector, portal, student-activity-center, 
// cameron, burson, fretwell, colvard, cone, atkins, urec. 
map.on('load', function() {
  map.setPaintProperty("uncc",'fill-color', '#0000FF');
  map.setPaintProperty("chhs", "fill-color", "#ff0000");
  map.setPaintProperty("cato", "fill-color", "#F2E34C");
  map.setPaintProperty("woodward", "fill-color", "#FFB52E");

  populateTable();
});

function populateTable(){
  var tableContent = '';
  //need dropdown menu to properly select so function knows which file to grab.
 // var selectedMenu = document.getElementById("days").value();
  //var covidToggle = document.getElementById("covidToggle").value();
  var tbodyRef = document.getElementById('datatable').getElementsByTagName('tbody')[0];
  var newRow = tbodyRef.insertRow();

  // Insert a cell at the end of the row
  var newCell = newRow.insertCell();
  
  // Append a text node to the cell
  var newText = document.createTextNode('new row');
  newCell.appendChild(newText);





  $.get("../non-covid/Friday.txt", function(data) {
    alert(data);
    var linebyline = data.split('\n');
    $.each(linebyline, function(key, value){
      tableContent += '<tr>';
      tableContent += '<td>' + value + '</td>';
      tableContent += '</tr>';
    });

    $('#tablediv').html(tableContent);
  });
  }



 