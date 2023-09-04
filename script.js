let city = document.querySelector("#cityName");
let mainImg = document.querySelector("#mainImg");
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=5d174715fabdbf0f5b0d73ca33b248ff&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiURL + city);
  var data = await response.json();
  
  if ((response.status == 404)||(city == '')) {
    document.querySelector('.err').style.display = 'block';
    document.querySelector(".temp").style.display = "none";
  } else {
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".celcius").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".h").innerHTML = data.main.humidity + "%";
  document.querySelector(".w").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".info").innerHTML = data.weather[0].description;

  if (data.weather[0].main == "Clouds") {
    mainImg.src = "./images/clouds.png";
  }
  if (data.weather[0].main == "Drizzle" || "Haze") {
    mainImg.src = "./images/drizzle.png";
  }
  if (data.weather[0].main == "Clear") {
    mainImg.src = "./images/clear.png";
  }
  if (data.weather[0].main == "Humidity") {
    mainImg.src = "./images/humidity.png";
  }
  if (data.weather[0].main == "Mist") {
    mainImg.src = "./images/mist.png";
  }
  if (data.weather[0].main == "Rain") {
    mainImg.src = "./images/rain.png";
  }
  if (data.weather[0].main == "Snow") {
    mainImg.src = "./images/snow.png";
  }
  if (data.weather[0].main == "Wind") {
    mainImg.src = "./images/wind.png";
  }

  document.querySelector(".temp").style.display = "block";
  document.querySelector(".err").style.display = "none";
  }
  
}
function fun() {
  checkWeather(city.value);
  city.value = '';
}
