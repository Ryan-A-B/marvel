import "./store.js";
import "bootstrap";
import "./style.scss";

Actions.initialise();

import Frame from "./Frame/Index.jsx";
import Characters from "./Characters/Index.jsx";

import CharacterFrame from "./Character/Frame.jsx";
import Character from "./Character/Index.jsx";

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ReactRouter.Router history={history}>
            <ReactRouter.Route path="/" component={Frame}>
                <ReactRouter.IndexRoute component={Characters}/>

                <ReactRouter.Route path="character" component={CharacterFrame}>
                    <ReactRouter.Route path=":id" component={Character}/>
                </ReactRouter.Route>
            </ReactRouter.Route>
        </ReactRouter.Router>
    </ReactRedux.Provider>,
    document.getElementById("app")
);
