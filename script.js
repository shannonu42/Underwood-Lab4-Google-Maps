/******************************************************
 * File: script.js
 * Author: Shannon Underwood
 * Date: March 22 2026
 *
 * Description:
 * This JavaScript file initializes the Google Map,
 * loads the KML polygon layer for the letter S,
 * and allows the user to toggle bicycle, transit,
 * and traffic layers on the map.
 *
 * Notes:
 * Only one transportation layer is shown at a time
 * to keep the map easier to read.
 ******************************************************/

let map;
let bikeLayer;
let transitLayer;
let trafficLayer;

// Center point used to focus the map on the S polygon at Pinery Park
const sCenter = { lat: 43.2837, lng: -81.7949 };

function initMap() {
    // Create the main Google Map
    map = new google.maps.Map(document.getElementById("map"), {
        center: sCenter,
        zoom: 13,
        mapTypeId: "roadmap"
    });

    // Load the hosted KML file containing the S polygon
const kmlLayer = new google.maps.KmlLayer({
    url: "https://raw.githubusercontent.com/shannonu42/Underwood-Lab4-Google-Maps/main/s_letter.kml",
    map: map,
    preserveViewport: true,
    zoom: 11
});

    // Create transportation overlay layers
    bikeLayer = new google.maps.BicyclingLayer();
    transitLayer = new google.maps.TransitLayer();
    trafficLayer = new google.maps.TrafficLayer();
}

// Clears all transportation layers before turning on another
function clearLayers() {
    bikeLayer.setMap(null);
    transitLayer.setMap(null);
    trafficLayer.setMap(null);
}

// Toggles the bicycle layer
function toggleBicycle() {
    const isOn = bikeLayer.getMap();
    clearLayers();

    if (!isOn) {
        bikeLayer.setMap(map);
    }
}

// Toggles the transit layer
function toggleTransit() {
    const isOn = transitLayer.getMap();
    clearLayers();

    if (!isOn) {
        transitLayer.setMap(map);
    }
}

// Toggles the traffic layer
function toggleTraffic() {
    const isOn = trafficLayer.getMap();
    clearLayers();

    if (!isOn) {
        trafficLayer.setMap(map);
    }
}