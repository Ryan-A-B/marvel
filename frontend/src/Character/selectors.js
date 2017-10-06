import {getCharacters} from "../Characters/selectors.js";

export const getCharacter = (state, id) => getCharacters(state)[id];
export const getCharacterName = (state, id) =>  getCharacter(state, id).name;
export const getCharacterDescription = (state, id) =>  getCharacter(state, id).description;

export const getCharacterThumbnail = (state, id) => {
    const {thumbnail} = getCharacter(state, id);

    return `${thumbnail.path}/${Config.marvel.image.size}.${thumbnail.extension}`;
}
