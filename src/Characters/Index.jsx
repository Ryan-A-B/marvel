import {getCharacterIds} from "./selectors.js";
import CharacterCard from "../Character/Card.jsx";

function Characters ({ids}) {
    return (
        <div className="row">
            {$.map(ids, function (id) {
                return (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                        <CharacterCard id={id}/>
                    </div>
                );
            })}
        </div>
    );
}

function mapStateToProps (state) {
    return {ids: getCharacterIds(state)};
}

export default ReactRedux.connect(mapStateToProps)(Characters);
