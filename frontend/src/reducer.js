import * as characters from "./Characters/reducers.js";
import * as comics from "./Comic/reducers.js";

function async (state = {}, action) {
    switch (action.type) {
    case Actions.SET_ASYNC_VALUE:
        return Object.assign({}, state, {[action.key]: action.value});
    default:
        return state;
    }
}

export default Redux.combineReducers({
    routing: ReactRouterRedux.routerReducer,
    async,
    ...characters,
    ...comics
});
