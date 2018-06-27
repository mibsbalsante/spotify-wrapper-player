import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albumsList = document.querySelector('#album-list');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotify.search.albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumsList));
  });
}
