import {getCharacters} from "../Characters/selectors.js";

export const getCharacter = (state, props) => getCharacters(state)[props.id];
