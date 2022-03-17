var map = L.map('map').setView([52.518620, 13.376187], 13);

map.removeControl(map.zoomControl);

//public API Key just for project presentation
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0emV3OTUiLCJhIjoiY2wwa3ptdDVuMDdhMzNjcWRwM2pyM2RubCJ9.nv6A4k8onEPT6a2nLbudqQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var button = document.getElementById("submit");
var input = document.getElementById("inputIP");

window.addEventListener("load", function () {

    var url = "https://api.ipify.org?format=json";

    fetch(url, {
        method: "get"
    }).then(function (response) {
        return response.text();
    }).then(function (text) {

        var data = JSON.parse(text);

        markerPositionAndData(data.ip);

    }).catch(function (error) {
        console.error(error);
        input.style.border = "1px solid red";
    });
});

button.addEventListener("click", function () {

    if (input.value != "") {
        markerPositionAndData(input.value);
    }
    else {
        input.style.border = "1px solid red";
    }
});

function markerPositionAndData(ip) {

    input.style.border = "1px solid white";
    //public API Key just for project presentation
    var url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_4kHtXNk8MnKZgkLsG7p8gbiKI2MlH&ipAddress=" + ip;

    fetch(url, {
        method: "get"
    }).then(function (response) {
        return response.text();
    }).then(function (text) {

        var data = JSON.parse(text);

        var lat = data.location.lat;
        var lng = data.location.lng;

        document.getElementsByClassName("outputData")[0].innerHTML = data.ip;
        document.getElementsByClassName("outputData")[1].innerHTML = data.location.city + ", " + data.location.country
        document.getElementsByClassName("outputData")[2].innerHTML = "UTC " + data.location.timezone;
        document.getElementsByClassName("outputData")[3].innerHTML = data.isp;

        // Icon options
        var iconOptions = {
            iconUrl: "./images/icon-location.svg",
            iconSize: [30, 35]
        }
        // Creating a custom icon
        var customIcon = L.icon(iconOptions);

        // Creating Marker Options
        var markerOptions = {
            title: "Location",
            clickable: false,
            draggable: false,
            icon: customIcon
        }
        // Creating a Marker
        var marker = L.marker([lat, lng], markerOptions);
        marker.addTo(map);

        map.flyTo(new L.LatLng(lat, lng), 15);
    }).catch(function (error) {
        console.error(error);
        input.style.border = "1px solid red";
    });
}