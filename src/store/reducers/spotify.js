import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
    SET_TOKEN,
    SEARCH_ALBUMS_FULFILLED,
    SEARCH_ALBUMS_REJECTED,
    GET_ALBUM_INFO_FULFILLED,
    GET_ALBUM_INFO_REJECTED,
    CLEAR_ALBUM_INFO
}
    from "../actions";

const INITIAL_STATE = {
    token: null,
    searchedTerm: '',
    searchResultAlbums: [],
    searchResultTracks: [],
    albumSelectionHistory: [],
    albumInfo: null
};

function spotify(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_FULFILLED:
            const { result, searchedTerm } = action.payload;
            return {
                ...state,
                searchResultAlbums: result.albums.items,
                searchResultTracks: result.tracks.items,
                searchedTerm
            };
        case GET_ALBUM_INFO_FULFILLED:
            var albumInfo = action.payload.albumInfo;
            var albumSelectionHistory = state.albumSelectionHistory.filter((item) => {
                return item.id != albumInfo.id;
            });
            if (albumSelectionHistory.length > 20)
                albumSelectionHistory.shift();
            albumSelectionHistory.push(albumInfo);

            return {
                ...state,
                albumSelectionHistory,
                albumInfo
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            };
        case CLEAR_ALBUM_INFO:
            return {
                ...state,
                albumInfo: INITIAL_STATE.albumInfo
            };
        case GET_ALBUM_INFO_REJECTED:
        case SEARCH_ALBUMS_REJECTED:
            return {
                ...state,
                token: INITIAL_STATE.token
            };
        default:
            return state;

    }
}

const persistConfig = {
    key: 'spotify',
    storage: storage,
    whitelist: ['token', 'albumSelectionHistory']
};


export default persistReducer(persistConfig, spotify);