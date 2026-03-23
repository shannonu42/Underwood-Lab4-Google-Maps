let map;
let bikeLayer;
let transitLayer;
let trafficLayer;

const sCenter = { lat: 43.2826, lng: -81.7916 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: sCenter,
        zoom: 15,
        mapTypeId: "roadmap"
    });

    const kmlLayer = new google.maps.KmlLayer({
        url: "https://raw.githubusercontent.com/shannonu42/Underwood-Lab4-Google-Maps/main/letter_s.kml",
        map: map,
        preserveViewport: true
    });

    bikeLayer = new google.maps.BicyclingLayer();
    transitLayer = new google.maps.TransitLayer();
    trafficLayer = new google.maps.TrafficLayer();
}

function clearLayers() {
    bikeLayer.setMap(null);
    transitLayer.setMap(null);
    trafficLayer.setMap(null);
}

function toggleBicycle() {
    const isOn = bikeLayer.getMap();
    clearLayers();

    if (!isOn) {
        bikeLayer.setMap(map);
    }
}

function toggleTransit() {
    const isOn = transitLayer.getMap();
    clearLayers();

    if (!isOn) {
        transitLayer.setMap(map);
    }
}

function toggleTraffic() {
    const isOn = trafficLayer.getMap();
    clearLayers();

    if (!isOn) {
        trafficLayer.setMap(map);
    }
}