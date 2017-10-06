import {getCharacterIds} from "./selectors.js";
import CharacterCard from "../Character/Card.jsx";

function Characters ({ids}) {
    return (
        <div className="characters card-columns">
            {$.map(ids, function (id) {
                return (
                    <ReactRouter.Link to={"/character/" + id} key={id}>
                        <CharacterCard id={id}/>
                    </ReactRouter.Link>
                );
            })}
        </div>
    );
}

function mapStateToProps (state) {
    return {ids: getCharacterIds(state)};
}

export default ReactRedux.connect(mapStateToProps)(Characters);
