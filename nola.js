setTimeout(time, 4000);

function time() {
  alert("Welcome to The Nola");
}

// //fetch(
// //  "https://api.openweathermap.org/data/2.5/weather?q=new+orleans&units=imperial&appid=2d8f7a8386dde22a3fe8bc2c4e1ca86c"
// //)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const api_url =
  "https://api.openweathermap.org/data/2.5/weather?q=new+orleans&units=imperial&appid=2d8f7a8386dde22a3fe8bc2c4e1ca86c";

async function getapi(url) {
  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}
function show(data) {
  let tab = `<tr>
        <th>Temp</th>
        <th>Humidity</th>
      </tr>`;

  for (let key of Object.keys(data.main)) {
    tab += `<tr>
        <td>${key.temp}</td>
        <td>${key.humidity}</td>
      </tr>`;
  }

  document.getElementById("sunshine").innerHTML = tab;
}
