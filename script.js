const apikey = "&APPID=ee6086f043d7413766d568c15ff61a21&units=metric";
const Url = "https://api.openweathermap.org/data/2.5/weather?q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkwhether(city) {
    const result =await fetch(Url + city + apikey);
    let data = await result.json();
    if (result.status == 404){
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";

}
    else{
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
   

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/Clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/Clear.png";
    }
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/Drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/Mist.png";
    }
       

   }

}
searchBtn.addEventListener("click", () => {
    checkwhether(search.value);
})

