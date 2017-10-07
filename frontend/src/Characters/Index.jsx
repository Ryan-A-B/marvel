import {setCharactersSearch} from "./actions.js";
import {getSearch, getFilteredCharacterIds} from "./selectors.js";
import CharacterCard from "../Character/Card.jsx";

class Characters extends React.Component {
    constructor (props) {
        super(props);

        this.state = {length: 24};

        this.reset = this.reset.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    componentWillMount () {
        document.title = "Marvel Characters"
    }

    componentDidMount () {
        $("#wrapper").on('scroll', this.onScroll);
    }

    componentWillReceiveProps () {
        this.reset();
    }

    reset () {
        this.setState({length: 24});
        $("#wrapper").scrollTop(0);
    }

    onScroll () {
        const pageHeight = $("#page").height();
        const wrapperHeight = $("#wrapper").height();
        const scrollPosition = $('#wrapper').scrollTop();

        const offset = pageHeight - (wrapperHeight + scrollPosition);

        const {length} = this.state;
        if (offset < 150 && length < this.props.ids.length) {
            this.setState({length: length + 12});
        }
    }

    render () {
        const {length} = this.state;
        const ids = this.props.ids.slice(0, length);

        return (
            <div className="characters">
                <div className="card-deck">
                    {$.map(ids, (id) => <CharacterCard id={id} key={id}/>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {ids: getFilteredCharacterIds(state)};
}

export default ReactRedux.connect(mapStateToProps)(Characters);
