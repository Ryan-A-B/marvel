export const PUT_CHARACTER = "PUT_CHARACTER";

function putCharacter (character) {
    store.dispatch({
        type: PUT_CHARACTER,
        character
    });
}

export function fetchCharacter (id) {
    $.ajax({
        url: `${Config.marvel.endpoint}characters/${id}`,
        data: {apikey: Config.marvel.apikey},
        success: function (response) {
            putCharacter(response.data.results[0]);
        }
    });
}
