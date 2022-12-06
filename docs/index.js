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

  const fs = require('fs');

  var contents = fs.readFileSync("docs/non-covid/Friday.txt", 'utf-8').toString().split('\n');

  var tbodyRef;
  var newRow;
  var newCell;
  for(let i = 0; i < contents.length; i++){
    tbodyRef = document.getElementById('datatable').getElementsByTagName('tbody')[0];
    newRow = tbodyRef.insertRow();
    newCell = newRow.insertCell();
    var newText = document.createTextNode(contents[i]);
    newCell.appendChild(newText);
  }

  

  
}