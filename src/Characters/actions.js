export const PUT_CHARACTERS = "PUT_CHARACTERS";

function putCharacters (characters) {
    store.dispatch({
        type: PUT_CHARACTERS,
        characters: lodash.reduce(characters, function (hashMap, character) {
            return Object.assign(hashMap, {[character.id]: character});
        }, {})
    });
}

export function fetchCharacters (force = true) {
    if (force || !store.getState().characters) {
        $.ajax({
            url: Config.marvel.endpoint + "characters",
            data: {apikey: Config.marvel.apikey},
            success: function (response) {
                putCharacters(response.data.results);
            }
        });
    }
}
