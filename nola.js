setTimeout(time, 4000);

function time() {
  alert("Welcome to The Nola");
}

function weatherBalloon( cityID ) {
  var key = '2d8f7a8386dde22a3fe8bc2c4e1ca86c';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBalloon( 4335045 );
};

function drawWeather( d ) {
var celsius = Math.round(parseFloat(d.main.temp)-273.15);
var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

document.getElementById('description').innerHTML = d.weather[0].description;
document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
document.getElementById('location').innerHTML = d.name;
}