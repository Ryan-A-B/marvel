import {fetchCharacters} from "./Characters/actions.js";

export function initialise () {
    fetchCharacters();
}
