import {getAsync} from "../selectors.js";

export const getComics = (state) => state.comics;
export const getComic = (state, id) => getComics(state)[id];
