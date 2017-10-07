import {viewComic} from "./actions.js";

class Comic extends React.Component {
    constructor (props) {
        super(props);

        this.onClick = viewComic.bind(null, props.id);
    }

    render () {
        const {name} = this.props;

        return (
            <Card.Container role="button" onClick={this.onClick}>
                <Card.Body>
                    {name}
                </Card.Body>
            </Card.Container>
        );
    }
}

export default Comic;
