const apiKey = '268808331fa0039bf6462d1a2a362fd2'; 

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            updateWeatherInfo(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function updateWeatherInfo(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

    document.getElementById('weather-info').style.display = 'block';
}