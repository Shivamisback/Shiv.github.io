// Sample anime data (replace with actual data)
const animeData = [
    { title: 'Anime 1', imageUrl: 'anime1.jpg' },
    { title: 'Anime 2', imageUrl: 'anime2.jpg' },
    { title: 'Anime 3', imageUrl: 'anime3.jpg' },
    // Add more anime objects as needed
];

// Function to dynamically create anime cards
function createAnimeCards() {
    const animeList = document.getElementById('anime-list');
    animeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.innerHTML = `
            <img src="${anime.imageUrl}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        animeList.appendChild(animeCard);
    });
}

// Call the function to create anime cards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createAnimeCards();
});
// Function to fetch anime data from Aniwatch API
async function fetchAniwatchAnime() {
    const response = await fetch('https://aniwatch.me/api/trending');
    const data = await response.json();
    return data;
}

// Function to fetch anime data from Kayoanime API
async function fetchKayoanimeAnime() {
    const response = await fetch('https://kayoanime.com/api/trending');
    const data = await response.json();
    return data;
}

// Function to dynamically create anime cards
async function createAnimeCards() {
    const animeList = document.getElementById('anime-list');

    // Fetch anime data from Aniwatch API
    const aniwatchData = await fetchAniwatchAnime();
    aniwatchData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.innerHTML = `
            <img src="${anime.poster}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        animeList.appendChild(animeCard);
    });

    // Fetch anime data from Kayoanime API
    const kayoanimeData = await fetchKayoanimeAnime();
    kayoanimeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.innerHTML = `
            <img src="${anime.poster}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        animeList.appendChild(animeCard);
    });
}

// Call the function to create anime cards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createAnimeCards();
});
