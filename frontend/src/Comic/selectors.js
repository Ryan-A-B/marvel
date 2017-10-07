import {getAsync} from "../selectors.js";

export const getComics = (state) => state.comics;
export const getComic = (state, id) => getComics(state)[id];

export const showRedirectModal = (state) => {
    const async = getAsync(state);

    const {viewComic} = async;

    if (viewComic) {
        return async[`comic-${viewComic}`] == Const.PENDING;
    }

    return false;
};
