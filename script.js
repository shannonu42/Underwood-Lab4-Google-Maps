let map;
let bikeLayer;
let transitLayer;
let trafficLayer;
let kmlLayer;

const sCenter = { lat: 43.2837, lng: -81.7949 };

function initMap() {
    console.log("initMap started");

    map = new google.maps.Map(document.getElementById("map"), {
        center: sCenter,
        zoom: 13,
        mapTypeId: "roadmap"
    });

    console.log("Map created");

    kmlLayer = new google.maps.KmlLayer({
        url: "https://raw.githubusercontent.com/shannonu42/Underwood-Lab4-Google-Maps/main/letter_s.kml?v=23",
        preserveViewport: true,
        map: map
    });

    console.log("KML layer created");

    kmlLayer.addListener("status_changed", () => {
        console.log("KML status:", kmlLayer.getStatus());
    });

    bikeLayer = new google.maps.BicyclingLayer();
    transitLayer = new google.maps.TransitLayer();
    trafficLayer = new google.maps.TrafficLayer();

    console.log("All layers ready");
}

window.initMap = initMap;

function clearLayers() {
    bikeLayer.setMap(null);
    transitLayer.setMap(null);
    trafficLayer.setMap(null);
}

function toggleBicycle() {
    const isOn = bikeLayer.getMap();
    clearLayers();
    if (!isOn) bikeLayer.setMap(map);
}

function toggleTransit() {
    const isOn = transitLayer.getMap();
    clearLayers();
    if (!isOn) transitLayer.setMap(map);
}

function toggleTraffic() {
    const isOn = trafficLayer.getMap();
    clearLayers();
    if (!isOn) trafficLayer.setMap(map);
}