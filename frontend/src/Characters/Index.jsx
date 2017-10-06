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

    componentDidMount () {
        $(window).on('scroll', this.onScroll);
    }

    componentWillReceiveProps () {
        this.reset();
    }

    reset () {
        this.setState({length: 24});
        $(window).scrollTop(0);
    }

    onScroll () {
        const documentHeight = $(document).height();
        const windowHeight = $(window).height();
        const scrollPosition = $('body').scrollTop();

        const offset = documentHeight - (windowHeight + scrollPosition);

        if (offset < 150) {
            this.setState({length: this.state.length + 12});
        }
    }

    render () {
        const {length} = this.state;
        const ids = this.props.ids.slice(0, length);

        return (
            <div className="characters">
                <Input.Text
                    value={this.props.search}
                    onChange={setCharactersSearch}
                    placeholder="Search"
                />
                <div className="card-deck">
                    {$.map(ids, (id) => <CharacterCard id={id} key={id}/>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        search: getSearch(state),
        ids: getFilteredCharacterIds(state)
    };
}

export default ReactRedux.connect(mapStateToProps)(Characters);
