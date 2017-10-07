import {setCharactersSearch} from "./actions.js";
import {getSearch} from "./selectors.js";

function mapStateToProps (state) {
    return {
        value: getSearch(state),
        onChange: setCharactersSearch
    };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, ownProps);

export default ReactRedux.connect(mapStateToProps, undefined, mergeProps)(Input.Text);
