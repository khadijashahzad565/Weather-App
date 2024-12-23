
function fetchWeather(city) {
    const apiKey = '2efdc81880dfc2d2f846005b360b3cac'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => showWeather(data))
    .catch(() => alert("Please check city name."));
}

function showWeather(data) {
    const resultDiv = document.getElementById("result");
    const city = data.name;
    const condition = data.weather.description;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    resultDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Condition: ${condition}</p>
        <p>Wind Speed: ${wind} m/s</p>
        <p>Humidity: ${humidity}%</p>
    `;
}

document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("cityName").value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});
