import SpotifyWebApi from 'spotify-web-api-js';

export default {
    searchAlbums: (query, token, callback) => {
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(token);
        spotifyApi.searchAlbums(query, null, callback);
    },
    getAlbum: (id, token, callback) => {
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(token);
        spotifyApi.getAlbum(id, null, callback);
    }
}