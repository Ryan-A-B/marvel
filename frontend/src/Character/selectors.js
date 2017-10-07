import {getCharacters} from "../Characters/selectors.js";

export const getCharacter = (state, id) => getCharacters(state)[id];
export const getCharacterName = (state, id) =>  getCharacter(state, id).name;
export const getCharacterDescription = (state, id) =>  getCharacter(state, id).description;
export const getCharacterUrls = (state, id) => getCharacter(state, id).urls;

export const getCharacterThumbnail = (state, id) => {
    const {thumbnail} = getCharacter(state, id);

    return `${thumbnail.path}/${Config.marvel.image.size}.${thumbnail.extension}`;
}

export function makeGetCharacterComics () {
    const regex = /\d+$/;
    const getCharacterComics = (state, id) => getCharacter(state, id).comics.items;

    return Reselect.createSelector(
        [getCharacterComics],
        (comics) => {
            return lodash.reduce(comics, function (list, comic) {
                try {
                    const id = comic.resourceURI.match(regex)[0];

                    list.push({id, ...comic});
                    return list;
                } catch (e) {
                    return list;
                }
            }, []);
        }
    );
}
