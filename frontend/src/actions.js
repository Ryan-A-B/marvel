import {fetchCharacters} from "./Characters/actions.js";

export const SET_ASYNC_VALUE = "SET_ASYNC_VALUE";

export function initialise () {
    fetchCharacters();
}

export function setAsyncValue (key, value) {
    store.dispatch({
        type: SET_ASYNC_VALUE,
        key, value
    });
}
