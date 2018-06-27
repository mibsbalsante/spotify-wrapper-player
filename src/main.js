import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Muse');
const albumsList = document.querySelector('#album-list');

albums.then(data => renderAlbums(data.albums.items, albumsList));
