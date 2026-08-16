function getData() {
    const pokeSearch = document.querySelector("#pokemon");
    const searchQuery = document.querySelector("#searchButton");
    const pokemonsearch = document.querySelector("#pokemonsearch")

    pokeSearch.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
            searchQuery.click();
    }});
    

    searchQuery.addEventListener("click", async () => {
        function capitalize(str) {
            return str[0].toUpperCase() + str.slice(1);
        }
        
        const pokemonName = pokeSearch.value;
            
        if (
                pokemonName.trim() !== "" 

            ) {
            pokemonsearch.innerHTML = "Loading pokemon data, please wait...";    
            try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    if (!response.ok) {
                        throw new Error(`Request failed with status ${response.status}`);
                    }

                    const data = await response.json();
                    console.log(data);
                    let abilitiesHTML = "";
                    data.abilities.forEach((ability) => {
                        abilitiesHTML += `<li>${capitalize(ability.ability.name)}</li>`;

                    })
                    let movesHTML = "";
                    data.moves.forEach((move) => {
                        movesHTML += `<li>${capitalize(move.move.name)}</li>`;
                    })
                    pokemonsearch.innerHTML = `
                    <h2>${capitalize(data.name)}</h2>
                    <p>Abilities:</p>
                    <ul>${abilitiesHTML}</ul>
                    <p>Moves:</p>
                    <ul>${movesHTML}</ul>
                    
                    `
                    

        
            } catch (error) {
                pokemonsearch.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
                console.log("Error fetching weather data:", error);
            }
        }
})
}

getData();