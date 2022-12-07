// Initialize and add the map
window.onload = function() {
  populateTable();
};

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

});


const inputFile = document.querySelector('#inputFile');
inputFile.addEventListener('change', () => {
  const fileReader = new FileReader();
  fileReader.onload = e => {
    const array = e.target.result.split('\n');
    var newRow = document.getElementById('datatable').insertRow();
    console.log(array);
    for (let i = 0; i < array.length-1; i++){     
      newRow.innerHTML = "<td>" + array[i] + "</td>";
      console.log(i);
    }
  };
  fileReader.readAsText(inputFile.files[0], 'UTF-8');
});

function populateTable(){
  var tableContent = '';
  //need dropdown menu to properly select so function knows which file to grab.
 // var selectedMenu = document.getElementById("days").value();
  //var covidToggle = document.getElementById("covidToggle").value();


  //var contents = readFileSync("/non-covid/Friday.txt").toString().split('\n');
  //var newRow = document.getElementById('datatable').insertRow();

  
  //newRow.innerHTML = "<td>" + result[1] + "</td>";

  //for(let i = 0; i < contents.length-1; i++){
    
    //newCell = newRow.insertCell();
    
    //newText = document.createTextNode(contents[i]);
   // newCell.appendChild(newText);
  //}

  

  
}