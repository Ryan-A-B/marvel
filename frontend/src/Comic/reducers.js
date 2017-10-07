import {PUT_COMIC} from "./actions.js";

const initial = {
    comics: {}
};

export function comics (state = initial.comics, action) {
    switch (action.type) {
    case PUT_COMIC:
        return Object.assign({}, state, {[action.comic.id]: action.comic});
    default:
        return state;
    }
}
