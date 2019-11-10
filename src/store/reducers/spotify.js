import {
    PLAY,
    SEARCH_ALBUMS_FULFILLED,
    SEARCH_ALBUMS_REJECTED,
    SET_TOKEN,
    GET_ALBUM_INFO_FULFILLED
}
    from "../actions";

const INITIAL_STATE = {
    token: '',
    searchedTerm: '',
    searchResult: {
        items: []
    },
    albumSelectionHistory: [],
    albumInfo: null
};

export default function spotify(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_FULFILLED:
            const { searchResult, searchedTerm } = action.payload;
            return {
                ...state,
                searchResult,
                searchedTerm
            };
        case SEARCH_ALBUMS_REJECTED:
            return {
                ...state,
                token: ""
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
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
        default:
            return state;

    }
} 