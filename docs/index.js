// Initialize and add the map

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

map.on('load', function() {
  map.setPaintProperty("uncc",'fill-color', '#0000FF');
});
  /*
  map.addSource('tileset_data', {
    type:'vector',
    url:'mapbox://mfenn2.clalmrqwg0b7k27ny1dabd295-50i72'
  });
  map.addLayer({
    'id': 'UNCC',
    'source': 'tileset_data',
    'source-layer': 'UNCC'
  });
  */
  /*
  map.setFeatureState({
    source: 'https://mikesmind.blog/UNCCheatmap.github.io/data.geojson',
    sourceLayer: 'building',
    id: 1060166212,
    }, {
    color: '#0000FF'
    })
  
  map.setPaintProperty(
    'buildings', 
    'fill-color', 
    ['match', ['get', 'id'], 1060166212, '#0000ff']
  )
  
  
  
});
*/
/*map.on("load", function() {

  
});
*/

