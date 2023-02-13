const BASE_URL = "https://superheroapi.com/api/"

const imageDisplay = document.getElementById('imageDisplay');
const searchField = document.getElementById('searchField');
const searchButton = document.getElementById('searchButton');

const getSearchedSuperHero = (keyword) => {
    fetch(`${BASE_URL}search/${keyword}`).then(response => response.json()).then(json=> 
        imageDisplay.innerHTML= `<img src="${json.results[0].image.url}" height=200px width = 200px />`
        );
}

// character is an object
const getStatsHTML = (character) => {
    // Object.keys returns keys of objects and stores in array
    // map takes array and returns array
    const stats = Object.keys(character.powerstats).map(stat => {
        // returns array of string which contains p tags like ['<p></p>', '<p></p>'];
        return `<p>${stat}: ${character.powerstats[stat]}}</p>`;
    });
    // returns long combined string such as <p></p><p></p>
    return stats.join('');
}

searchButton.onclick = () => {
    getSearchedSuperHero(searchField.value);}

    // 07:40:40