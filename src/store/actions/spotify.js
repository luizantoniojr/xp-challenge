import { SEARCH_ALBUMS, SET_TOKEN, GET_ALBUM_INFO } from '../actions';

import spotify from '../../services/spotifyService';

export function searchAlbums(searchedTerm, token) {
    return {
        type: SEARCH_ALBUMS,
        payload: new Promise((resolve, reject) => {
            spotify.searchAlbums(searchedTerm, token, (error, data) => {
                if (error)
                    reject(error);
                resolve({ searchedTerm, searchResult: data.albums });
            });
        })
    }
}

export function getAlbumInfo(id, token) {
    return {
        type: GET_ALBUM_INFO,
        payload: new Promise((resolve, reject) => {
            spotify.getAlbum(id, token, (error, data) => {
                if (error)
                    reject(error);
                resolve({ albumInfo: data });
            });
        })
    }
}

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: { token }
    }
}
