// Initialize and add the map

mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
});
window.onload = function(){
      let day = document.getElementById('day').value;
      let hour = document.getElementById('hour').value;
      let covid = document.getElementById('covid').value;
      console.log(day);
      console.log(hour);
      console.log(covid);

      const url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/FridayCleaned.txt"
      fetch(url)
      .then( r => r.text() )
      .then( t => document.getElementById("test").innerHTML = t)

}
/*
function dropSelect(){
  let selection = document.getElementById('day')
  selection.addEventListener('change', function() {
      let day = document.getElementById('day').value;
      let hour = document.getElementById('hour').value;
      let covid = document.getElementById('covid').value;
      console.log(day);
      console.log(hour);
      console.log(covid);
  });
}; */
document.getElementById('day').onchange = function(){
  var arr = [];
  var fr = new FileReader();
  fr.onload = function(){
    var lines = this.result.split('\n');
    for (var line = 0; line < lines.length; line++){
      arr = []
    }
  }
  console.log(this.value);
}
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





 