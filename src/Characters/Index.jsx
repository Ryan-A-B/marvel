import {getCharacterIds} from "./selectors.js";
import CharacterCard from "../Character/Card.jsx";

function Characters ({ids}) {
    return (
        <div className="card-columns">
            {$.map(ids, function (id) {
                return (
                    <CharacterCard id={id} key={id}/>
                );
            })}
        </div>
    );
}

function mapStateToProps (state) {
    return {ids: getCharacterIds(state)};
}

export default ReactRedux.connect(mapStateToProps)(Characters);
