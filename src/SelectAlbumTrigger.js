import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.querySelector('#album-list');
const albumInfo = document.querySelector('#album-info');
const albumTracks = document.querySelector('#album-tracks');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const { target } = e;
    e.preventDefault();
    makeRequest(target.dataset.albumId);
  });
}
