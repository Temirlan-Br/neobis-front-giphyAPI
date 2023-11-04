let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector('.search-btn');
let gifsContent = document.querySelector('.gifs-content');

let URL = 'https://api.giphy.com/v1/gifs/search?api_key=';
let APIKEY = 'rZS5NDYvzTcrC6eUWKSCOn3I91sRztHb';

document.addEventListener('DOMContentLoaded', () => {
  searchInput.value = 'Dr. Dre';
  getGifs();
  async function getGifs() {
    searchBtn.disabled = true;
    try {
      let response = await fetch(
        `${URL}${APIKEY}&q=${searchInput.value.trim()}&limit=24`
      );
      let data = await response.json();

      gifsContent.innerHTML = '';
      data.data.forEach((gif) => {
        let gifImg = document.createElement('img');
        gifImg.className = 'content-img';
        gifImg.src = gif.images.original.url;

        gifsContent.appendChild(gifImg);
      });
      searchInput.value = '';
    } catch (err) {
      console.log(err);
    } finally {
      searchBtn.disabled = false;
    }
  }
  searchBtn.addEventListener('click', getGifs);
});
