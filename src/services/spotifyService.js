import SpotifyWebApi from 'spotify-web-api-js';
const token = 'BQB0ZWz3RVRK5QCrnQgyIBFnjVRG0AbYAF4PYch5L7iFM0Kr4NzdhSNzBd3lHiueZQUxDpcerepU-jZ--4fSRzjMoM08uOS7EvrwOK7UjCLFbNdwChPfzKCMqZ1_SBn_Jfkqjtyrk9lxC3xdPp4CEE9g-LxYk3ERkw3VF7U';


export default {
    searchAlbums: (query, callback) => {
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(token);
        spotifyApi.searchAlbums(query, null, callback);
    }
}