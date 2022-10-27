// Initialize and add the map
function initMap() {
    // The location of Uluru
    const UNCC = { lat: 35.30910662583227, long: -80.73357613232336 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: UNCC,
      map: map,
    });
  }
  
  window.initMap = initMap;