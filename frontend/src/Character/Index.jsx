import {fetchCharacter} from "./actions.js";
import {getCharacterName} from "./selectors.js";
import CharacterCard from "./Card.jsx";
import * as Components from "./Components.jsx";

class Index extends React.Component {
    componentWillMount () {
        document.title = `${this.props.name} - Marvel`;

        fetchCharacter(this.props.params.id);
    }

    render () {
        const {id} = this.props.params;

        return (
            <section id="character">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <CharacterCard id={id}/>
                    </div>
                    <div className="col">
                        <Components.Urls id={id}/>
                        <Components.Description id={id} className=""/>
                    </div>
                </div>
                <Components.AppearsIn id={id}/>
            </section>
        );
    }
}

function mapStateToProps (state, props) {
    const {id} = props.params;

    return {name: getCharacterName(state, id)};
}

export default ReactRedux.connect(mapStateToProps)(Index);
