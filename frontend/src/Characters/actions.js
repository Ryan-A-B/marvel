export const PUT_CHARACTERS = "PUT_CHARACTERS";
export const SET_CHARACTER_SEARCH = "SET_CHARACTER_SEARCH";

function putCharacters (characters) {
    store.dispatch({
        type: PUT_CHARACTERS,
        characters: lodash.reduce(characters, function (hashMap, character) {
            return Object.assign(hashMap, {[character.id]: character});
        }, {})
    });
}

export function fetchCharacters (force = false) {
    $.get("/characters.json", function (characters) {
        putCharacters(characters);
    });
}

export function setCharactersSearch (search) {
    store.dispatch({
        type: SET_CHARACTER_SEARCH,
        search
    });
}
