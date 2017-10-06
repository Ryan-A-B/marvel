import * as Components from "./Components.jsx";

function CharacterCard({id}) {
    return (
        <ReactRouter.Link to={"/character/" + id} className="card card-character" key={id}>
            <Components.Thumbnail id={id}/>
            <Card.Body>
                <Card.Title className="text-center">
                    <Components.Name id={id}/>
                </Card.Title>
            </Card.Body>
        </ReactRouter.Link>
    );
}

export default CharacterCard;
