import * as Components from "./Components.jsx";

function CharacterCard({id}) {
    return (
        <Card.Container>
            <Components.Thumbnail id={id} className="card-img-top"/>
            <Card.Body>
                <Card.Title>
                    <Components.Name id={id}/>
                </Card.Title>
                <Components.Description id={id}/>
            </Card.Body>
        </Card.Container>
    );
}

export default CharacterCard;
