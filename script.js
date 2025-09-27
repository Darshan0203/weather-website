async function getWeather() {
  const city = document.getElementById("location").value;  // Changed from "city" to "location"
  const apiKey ="b17cfefeffa8fe66c4d21f50380b93bd"; // const apiKey = "<API_KEY>"; // Moved to .env

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weather-result").innerHTML =  // Changed from "weather" to "weather-result"
      `<h2>${data.name}</h2>
       <p>${data.weather[0].description}</p>
       <p>🌡️ ${data.main.temp} °C</p>`;
  } else {
    document.getElementById("weather-result").innerHTML = "<p>City not found</p>";
  }
}

// Remove the onclick from HTML and use this instead:
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener("click", function(e) {
    e.preventDefault();  // Prevent form submission
    getWeather();
  });
});