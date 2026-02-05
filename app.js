document.getElementById("getWeather").addEventListener("click", () => {
        // Step 1: Get user location
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Your browser does not support Geolocation");
    }
});

// If location is successfully obtained
function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("Latitude:", lat, "Longitude:", lon);

    // Step 2: Fetch weather data from Weather API
    const apiKey = "5ec380983e54440bb7a134354260302"; // API key from weatherapi.com
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check the data in console first
            displayWeather(data);
        })
        .catch(err => console.error("Error fetching weather:", err));
}

// If there’s an error getting location
function error(err) {
    alert("Could not get your location");
}

// Display weather data on the page
function displayWeather(data) {
    document.getElementById("city").textContent = data.location.name;
    document.getElementById("temp").textContent = data.current.temp_c + "°C";
    document.getElementById("condition").textContent = data.current.condition.text;
}

