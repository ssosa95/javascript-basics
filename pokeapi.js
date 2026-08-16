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

                    let typesHTML = "";
                    data.types.forEach((type) => {
                        typesHTML += `<li>${capitalize(type.type.name)}</li>`;
                    });

                    let abilitiesHTML = "";
                    data.abilities.forEach((ability) => {
                        abilitiesHTML += `<li>${capitalize(ability.ability.name)}</li>`;

                    });

                    let statsHTML = "";
                    data.stats.forEach((stat) => {
                        statsHTML += `<li>${capitalize(stat.stat.name)}: ${stat.base_stat}</li>`;
                    });

                    let movesHTML = "";
                    data.moves.forEach((move) => {
                        movesHTML += `<li>${capitalize(move.move.name)}</li>`;
                    });

                    pokemonsearch.innerHTML = `
                    <h2>${capitalize(data.name)}</h2>
                    <p>Types:</p>
                    <ul>${typesHTML}</ul>
                    <p>Abilities:</p>
                    <ul>${abilitiesHTML}</ul>
                    <p>Stats:</p>
                    <ul>${statsHTML}</ul>
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