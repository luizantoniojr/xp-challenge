import { PLAY, SEARCH_ALBUMS_FULFILLED } from "../actions";

const INITIAL_STATE = {
    searchResult: {
        items: []
    },
    searchedTerm: "",
    searchHistory: []
};

export default function spotify(state = INITIAL_STATE, action) {
    if (action.type === SEARCH_ALBUMS_FULFILLED) {
        console.log(action.payload)
        const { searchResult, searchedTerm } = action.payload;
        return {
            ...state,
            searchResult,
            searchedTerm
        };
    }
    return state;
}