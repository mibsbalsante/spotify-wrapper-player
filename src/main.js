import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Muse');
const albumsList = document.querySelector('#album-list');

const album = spotify.album.getAlbum('');
const albumInfo = document.querySelector('#album-info');
const albumTracks = document.querySelector('#album-tracks');

albums.then(data => renderAlbums(data.albums.items, albumsList));
album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
