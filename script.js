let map;
let bikeLayer;
let transitLayer;
let trafficLayer;
new google.maps.Marker({
    position: { lat: 43.24841, lng: -81.82342 },
    map: map,
    title: "Pinery Provincial Park"
});

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.24841, lng: -81.82342 },
        zoom: 14
    });

    const kmlLayer = new google.maps.KmlLayer({
        url: "https://raw.githubusercontent.com/shannonu42/Underwood-Lab4-Google-Maps/main/letter_s.kml",
        map: map,
        preserveViewport: false
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

