// Initialize and add the map
function initMap() {
    // The location of UNCC
    const UNCC = { lat: 35.30910662583227, lng: -80.73357613232336 };
    // The map, centered at UNCC
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: UNCC,
    });
    // The marker, positioned at UNCC
    const marker = new google.maps.Marker({
      position: UNCC,
      map: map,
    });
  }
  
  window.initMap = initMap;