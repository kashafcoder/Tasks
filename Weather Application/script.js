window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherData);
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  });
  
  function fetchWeatherData(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude; 
    const apiKey = "6fdee3ab9991855da6a654997e249a06";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=en`;
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching weather data');
      }
      return response.json();
    })
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });

  }
  
  function displayWeatherData(data) {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.style.display = "flex";
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const iconElement = document.getElementById("icon");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    const pressureElement = document.getElementById("pressure");
  
  
    locationElement.textContent = data.name;
    temperatureElement.textContent += `${Math.round(data.main.temp - 273.15)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    iconElement.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windElement.textContent = `Wind: ${data.wind.speed} m/s`;
    pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
  }
  