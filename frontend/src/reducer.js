import * as characters from "./Characters/reducers.js";

export default Redux.combineReducers({
    routing: ReactRouterRedux.routerReducer,
    ...characters
});
