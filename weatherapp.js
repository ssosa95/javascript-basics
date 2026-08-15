function displayWeather() {
    
        const searchQuery = document.querySelector("#searchButton");
        const weatherInfo = document.querySelector("#weather");
        const latitudeInput = document.querySelector("#latitude");
        const longitudeInput = document.querySelector("#longitude");

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
                    console.log("Error fetching user data:", error);
            }}});
        
        
} 

displayWeather();