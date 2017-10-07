import {setCharactersSearch} from "./actions.js";
import {getSearch} from "./selectors.js";

function mapStateToProps (state) {
    return {
        value: getSearch(state),
        onChange: setCharactersSearch
    };
}

const mergeProps = (stateProps) => Object.assign({}, stateProps);

export default ReactRedux.connect(mapStateToProps, undefined, mergeProps)(Input.Text);
