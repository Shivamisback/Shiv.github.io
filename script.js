document.addEventListener('DOMContentLoaded', function() {
    fetchAnimeData();
});

async function fetchAnimeData() {
    try {
        const response = await fetch('https://api.jikan.moe/v3/season/later');
        const data = await response.json();
        displayAnimeData(data.anime);
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
}

function displayAnimeData(animeList) {
    const animeItems = document.getElementById('anime-items');
    animeList.forEach(anime => {
        const listItem = document.createElement('li');
        listItem.classList.add('anime-item');

        const title = document.createElement('h3');
        title.classList.add('anime-title');
        title.textContent = anime.title;
        listItem.appendChild(title);

        if (anime.image_url) {
            const image = document.createElement('img');
            image.classList.add('anime-image');
            image.src = anime.image_url;
            listItem.appendChild(image);
        }

        const details = document.createElement('div');
        details.classList.add('anime-details');
        details.innerHTML = `
            <p><strong>Start Date:</strong> ${anime.start_date ? anime.start_date : 'N/A'}</p>
            <p><strong>End Date:</strong> ${anime.end_date ? anime.end_date : 'N/A'}</p>
            <p><strong>Episodes:</strong> ${anime.episodes ? anime.episodes : 'N/A'}</p>
            <p><strong>Type:</strong> ${anime.type ? anime.type : 'N/A'}</p>
            <p><strong>Synopsis:</strong> ${anime.synopsis ? anime.synopsis : 'N/A'}</p>
        `;
        listItem.appendChild(details);

        animeItems.appendChild(listItem);
    });
}
