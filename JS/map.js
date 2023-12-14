// Initialize and add the map
function initMap() {
  // The location of Uluru
  const JP = { lat: 45.582373, lng: 6.034289 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: JP,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: JP,
    map: map,
  });
}

window.initMap = initMap;