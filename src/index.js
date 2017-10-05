import "./store.js";
import "bootstrap";
import "./style.scss";

Actions.initialise();

import Frame from "./Frame/Index.jsx";
import Characters from "./Characters/Index.jsx";

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ReactRouter.Router history={history}>
            <ReactRouter.Route path="/" component={Frame}>
                <ReactRouter.IndexRoute component={Characters}/>
            </ReactRouter.Route>
        </ReactRouter.Router>
    </ReactRedux.Provider>,
    document.getElementById("app")
);
