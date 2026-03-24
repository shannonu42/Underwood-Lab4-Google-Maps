/******************************************************
 * File: script.js
 * Author: Shannon Underwood
 * Date: March 23 2026
 *
 * Description:
 * Initializes the Google Map, loads the KML polygon,
 * and allows bicycle, transit, and traffic layers
 * to be toggled on and off.
 ******************************************************/

console.log("script.js loaded");

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

    kmlLayer.addListener("status_changed", function () {
        console.log("KML status:", kmlLayer.getStatus());
    });

    bikeLayer = new google.maps.BicyclingLayer();
    transitLayer = new google.maps.TransitLayer();
    trafficLayer = new google.maps.TrafficLayer();

    console.log("All layers ready");
}

window.initMap = initMap;

// Clears all transportation layers
function clearLayers() {
    bikeLayer.setMap(null);
    transitLayer.setMap(null);
    trafficLayer.setMap(null);
}

// Toggles bicycle layer
function toggleBicycle() {
    const isOn = bikeLayer.getMap();
    clearLayers();

    if (!isOn) {
        bikeLayer.setMap(map);
    }
}

// Toggles transit layer
function toggleTransit() {
    const isOn = transitLayer.getMap();
    clearLayers();

    if (!isOn) {
        transitLayer.setMap(map);
    }
}

// Toggles traffic layer
function toggleTraffic() {
    const isOn = trafficLayer.getMap();
    clearLayers();

    if (!isOn) {
        trafficLayer.setMap(map);
    }
}