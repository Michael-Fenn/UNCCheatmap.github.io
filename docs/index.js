// Initialize and add the map

mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
});
window.onload = function(){
      getText("https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt")
    }

    async function getText(file) {
      let hour = document.getElementById('hour').value;
      let x = await fetch(file);
      let y = await x.text();
      let arr = y.split('\n'); 
      var table = document.getElementById("tableBody");
      //removes old table
      for(var j = table.rows.length; j > 0; j--){
        table.deleteRow(j-1);
      }
      //creates new table data
      document.getElementById("tableBody").innerHTML +=  "<tr><th>Building</th><th># of Connections</th></tr>";
      //created a loop that goes through the array made by the data and check every line for the time and if it matches
      // with the time it adds it to a new array 
      let time_arr = [];
      let building_time = [];
      for (let a = 0; a < arr.length; a++){
        building_time = arr[a].substring(0,2);
        if(building_time == hour){
          time_arr[a] = arr[a].toString()
        }
        document.getElementById("tableBody").innerHTML +=  "<tr><td>" + building_time[a] + "</td><td>" + arr[a] + "</td></tr>";
      }

      
    }

document.getElementById('day').onchange = function(){
  let day = document.getElementById('day').value;
  let covid = document.getElementById('covid').value;
  let url = "";
  if (covid == "non-covid"){
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/TuesdayCleaned.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/WednesdayCleaned.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/ThursdayCleaned.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/FridayCleaned.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SaturdayCleaned.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SundayCleaned.txt";
    }
  }
  else{
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Monday.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Tuesday.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Wednesday.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Thursday.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Friday.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Saturday.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Sunday.txt";
    }
  }
  getText(url);
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
  map.setPaintProperty("Unio",'fill-color', '#0000FF');
  map.setPaintProperty("PORT", "fill-color", "#ff0000");
  map.setPaintProperty("Cato", "fill-color", "#F2E34C");
  map.setPaintProperty("Wood", "fill-color", "#FFB52E");

});





 