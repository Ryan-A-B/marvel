import CharacterCard from "./Card.jsx";
import * as Components from "./Components.jsx";

function Index (props) {
    const {id} = props.params;

    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <CharacterCard id={id}/>
                </div>
                <div className="col">
                    <Components.Description id={id}/>
                </div>
            </div>
        </div>
    );
}

export default Index;
