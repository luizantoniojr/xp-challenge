import { PLAY, SEARCH_ALBUMS_FULFILLED } from "../actions";

const INITIAL_STATE = {
    searchResult: {
        items: []
    },
    searchTerm: "",
    searchHistory: []
};

export default function spotify(state = INITIAL_STATE, action) {
    if (action.type === SEARCH_ALBUMS_FULFILLED) {
        console.log(action.payload.albums)
        return {
            ...state,
            searchResult: action.payload.albums
        };
    }
    return state;
}