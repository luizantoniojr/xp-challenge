import {
    SEARCH_ALBUMS_FULFILLED,
    SEARCH_ALBUMS_REJECTED,
    SET_TOKEN,
    GET_ALBUM_INFO_FULFILLED,
    GET_ALBUM_INFO_REJECTED
}
    from "../actions";

const INITIAL_STATE = {
    token: '',
    searchedTerm: '',
    searchResultAlbums: [],
    searchResultTracks: [],
    albumSelectionHistory: [],
    albumInfo: null
};

export default function spotify(state = INITIAL_STATE, action) {
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
        case GET_ALBUM_INFO_REJECTED:
        case SEARCH_ALBUMS_REJECTED:
            return {
                ...state,
                token: ""
            };
        default:
            return state;

    }
} 