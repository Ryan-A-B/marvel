import {PUT_CHARACTERS} from "./actions.js";

const initial = {
    characters: {}
};

export function characters (state = initial.characters, action) {
    switch (action.type) {
    case PUT_CHARACTERS:
        return Object.assign({}, state, action.characters);
    default:
        return state;
    }
}
