let map;
let bikeLayer;
let transitLayer;
let trafficLayer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 75, lng: -38 },
        zoom: 5
    });

    const kmlLayer = new google.maps.KmlLayer({
        url: "PASTE_YOUR_KML_LINK_HERE",
        map: map
    });

    bikeLayer = new google.maps.BicyclingLayer();
    transitLayer = new google.maps.TransitLayer();
    trafficLayer = new google.maps.TrafficLayer();
}

function toggleBicycle() {
    bikeLayer.setMap(bikeLayer.getMap() ? null : map);
}

function toggleTransit() {
    transitLayer.setMap(transitLayer.getMap() ? null : map);
}

function toggleTraffic() {
    trafficLayer.setMap(trafficLayer.getMap() ? null : map);
}