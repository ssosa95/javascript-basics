function displayWeather() {
    
        const searchQuery = document.querySelector("#searchButton");
        const weatherInfo = document.querySelector("#weather");
        const latitudeInput = document.querySelector("#latitude");
        const longitudeInput = document.querySelector("#longitude");

        latitudeInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
            searchQuery.click();
    }
});

        longitudeInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
            searchQuery.click();
    }
});

        searchQuery.addEventListener("click", async () => {
            const latitudeData = latitudeInput.value;
            const longitudeData = longitudeInput.value;
            const numericLat = Number(latitudeData);  
            const numericLong = Number(longitudeData);
            
            if (
                latitudeData.trim() !== "" &&
                longitudeData.trim() !== "" &&
                !Number.isNaN(numericLat) &&
                !Number.isNaN(numericLong)

            ) {
                weatherInfo.innerHTML = "Loading weather data, please wait...";
                try {
                    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitudeData}&longitude=${longitudeData}&current=temperature_2m,weather_code`);
                    if (!response.ok) {
                        throw new Error(`Request failed with status ${response.status}`);
                    }

                    const data = await response.json();                    
                    weatherInfo.innerHTML = `
                    <h2>Location: ${data.latitude}° latitude, ${data.longitude}° longitude </h2>
                    <p>Temperature: ${data.current.temperature_2m}°C </p>
                    `;
                    
                } catch (error) {
                    weatherInfo.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
                    console.log("Error fetching weather data:", error);
            }}
            else {
                weatherInfo.innerHTML = "<p>Please enter valid latitude and longitude values.</p>";
            }
        });
        
        
} 

displayWeather();