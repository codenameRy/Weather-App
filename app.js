var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function update(weather) { // updates the content of the HTML elements
    temp.innerHTML = weather.temp;
    loc.innerHTML = weather.loc;
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    icon.src = "imgs/codes/" + weather.icon + ".png"; // Icon uses images, so we need image src
    console.log(icon.src); // debugging command, see browser dev panes
}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    direction = document.getElementById("direction");
    wind = document.getElementById("wind");


    var weather = {};
    weather.wind = 3.5;
    weather.direction = "N";
    weather.humidity = 86;
    weather.loc = "Honolulu";
    weather.temp = "89";
    weather.icon = 200;

    update(weather);
}