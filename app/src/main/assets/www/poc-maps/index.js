let map;

function initMap() {

    const positionMatane = { lat: 48.849998, lng: -67.533333 };

    const Coordinates = [
        { lat: 48.849998, lng: -67.533333 },
        { lat: 48.78699133553176, lng: -67.70178350274725 },
        { lat: 48.72038598973693, lng: -67.89402320809118 },
        { lat: 48.698829358317084, lng: -67.82737811008539},
      ];

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.849998, lng: -67.533333 },
    zoom: 8,
  });

  new google.maps.Marker({
    position: positionMatane,
    map,
    title: "Hello World!",
  });

  const path = new google.maps.Polyline({
    path: Coordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path.setMap(map);


}
