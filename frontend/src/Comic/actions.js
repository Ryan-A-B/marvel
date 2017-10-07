import {getComic} from "./selectors.js";

export const PUT_COMIC = "PUT_COMIC";

function putComic (comic) {
    store.dispatch({
        type: PUT_COMIC,
        comic
    });
}

function fetchComic (id) {
    const async = `comic-${id}`;
    Actions.setAsyncValue(async, Const.PENDING);

    $.ajax({
        url: `${Config.marvel.endpoint}/comics/${id}`,
        data: {apikey: Config.marvel.apikey},
        success: function (response) {
            putComic(response.data.results[0]);
            Actions.setAsyncValue(async, Const.SUCCESS);
        },
        error: function (xhr, status, err) {
            Actions.setAsyncValue(async, Const.FAILURE);
            alert("Something went wrong");
        }
    });
}

export function viewComic (id) {
    const comic = getComic(store.getState(), id);

    if (comic) {
        window.open(comic.urls[0].url);
    } else {
        Actions.setAsyncValue('viewComic', id);
        fetchComic(id);
    }
}
