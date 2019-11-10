import { PLAY, SEARCH_ALBUMS } from '../actions';

import spotify from '../../services/spotifyService';

export function searchAlbums(searchedTerm) {
    return {
        type: SEARCH_ALBUMS,
        payload: new Promise((resolve, reject) => {
            spotify.searchAlbums(searchedTerm, (error, data) => {
                if (error)
                    reject(error);
                resolve({ searchedTerm, searchResult: data.albums });
            });
        })
    }
}
