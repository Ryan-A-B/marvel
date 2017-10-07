import {viewComic} from "./actions.js";
import {getAsyncValue} from "../selectors.js";

class Redirect extends React.Component {
    constructor (props) {
        super(props);

        this.id = "modal-redirect-comic";
        this.title = (
            <span>
                <i className="fa fa-spinner fa-spin"/> Redirecting...
            </span>
        );

        this.modal = (action) => {$(`#${this.id}`).modal(action)};
    }

    componentWillUpdate (nextProps) {
        switch (nextProps.async) {
        case Const.PENDING:
            this.modal('show');
            break;
        case Const.SUCCESS:
            viewComic(nextProps.viewComic);
        default:
            this.modal('hide');
            break;
        }

    }

    render () {
        return <Modal.BareStatic id={this.id} title={this.title}/>;
    }
}

function mapStateToProps (state) {
    const viewComic = getAsyncValue(state, 'viewComic');
    const async = getAsyncValue(state, `comic-${viewComic}`);

    return {viewComic, async};
}

export default ReactRedux.connect(mapStateToProps)(Redirect);
