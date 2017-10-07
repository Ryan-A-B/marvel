import {viewComic} from "./actions.js";

class Comic extends React.Component {
    constructor (props) {
        super(props);

        this.onClick = viewComic.bind(null, props.id);
    }

    render () {
        const {name} = this.props;

        return (
            <Button.Button className="btn-link" onClick={this.onClick}>
                {name}
            </Button.Button>
        );
    }
}

export default Comic;
