import reducer from "./reducer.js";
  
const middleware = ReactRouterRedux.routerMiddleware(ReactRouter.browserHistory);
window.store = Redux.createStore(reducer, load(), Redux.applyMiddleware(middleware));
store.subscribe(save);

function load () {
    try {
        const serialisedState = localStorage.getItem('state');

        if (!serialisedState) {
            return undefined;
        }

        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
}

function save () {
    try {
        const serialisedState = JSON.stringify(store.getState());
        localStorage.setItem('state', serialisedState);
    } catch (err) {
        // Browser doesn't support localstorage
    }
}
