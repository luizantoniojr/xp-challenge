import { PLAY, SEARCH_ALBUMS } from '../actions';

import spotify from '../../services/spotifyService';

export function searchAlbums(query) {
    return {
        type: SEARCH_ALBUMS,
        payload: new Promise((resolve) => {
            spotify.searchAlbums(query, (err, data) => {
                resolve(data);
            });
        })
    }
}
