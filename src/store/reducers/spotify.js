import { PLAY, SEARCH_ALBUMS_FULFILLED, SEARCH_ALBUMS_REJECTED, SET_TOKEN } from "../actions";

const INITIAL_STATE = {
    token: '',
    searchResult: {
        items: []
    },
    searchedTerm: "",
    searchHistory: []
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
        default:
            return state;

    }
}