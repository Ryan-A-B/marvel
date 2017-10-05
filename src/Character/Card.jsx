import {getCharacter} from "./selectors.js";

function CharacterCard({character}) {
    return (
        <Card.Container>
            <Card.Body>
                {character.name}
            </Card.Body>
        </Card.Container>
    );
}

function mapStateToProps (state, props) {
    return {character: getCharacter(state,  props)};
}

export default ReactRedux.connect(mapStateToProps)(CharacterCard);
