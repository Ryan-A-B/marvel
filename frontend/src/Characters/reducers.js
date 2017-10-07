import {PUT_CHARACTERS, SET_CHARACTER_SEARCH} from "./actions.js";
import {PUT_CHARACTER} from "../Character/actions.js";

const initial = {
    characters: {},
    search: ""
};

export function characters (state = initial.characters, action) {
    switch (action.type) {
    case PUT_CHARACTER:
        return Object.assign({}, state, {[action.character.id]: action.character});
    case PUT_CHARACTERS:
        return Object.assign({}, state, action.characters);
    default:
        return state;
    }
}

export function search (state = initial.search, action) {
    switch (action.type) {
    case SET_CHARACTER_SEARCH:
        return action.search;
    default:
        return state;
    }
}
