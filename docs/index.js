// Initialize and add the map

mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
});

//placeholder values
var very_high = 1000;
var high = 800;
var medium = 600;
var low = 400;
var very_low = 200;

map.addLayer({
  id: '1060166212',
  'type': 'fill',    /*define the type of layer fill, line, point, fill-extrusion, background, raster, circle*/
  'source-layer': 'Buildings',
  'layout': {
    'visibility': 'visible'
  },

  /*there are many options for styling - this is a simple style*/
  'paint': {
    'fill-color': ['match', ['get', 'PROV_ID'], // get the property
                   'GP', 'yellow',              // if 'GP' then yellow
                   'XX', 'black',               // if 'XX' then black 
                   'white']                     // white otherwise
    },
    'fill-outline-color': 'white'
  }
);


