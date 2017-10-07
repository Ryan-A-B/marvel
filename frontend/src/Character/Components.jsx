import {
    getCharacterThumbnail, getCharacterName, getCharacterDescription,
    getCharacterUrls, makeGetCharacterComics
} from "./selectors";
import Comic from "../Comic/Link.jsx";

export const Thumbnail = (function () {
    const Component = function ({dispatch, ...attributes}) {
        return <img {...attributes}/>;
    };

    const mapStateToProps = function (state, props) {
        return {src: getCharacterThumbnail(state, props.id)};
    };

    return ReactRedux.connect(mapStateToProps)(Component);
})();

export const Name = (function () {
    const Component = function ({dispatch, name, ...attributes}) {
        Object.assign(attributes, {children: name});

        return <span {...attributes}/>;
    };

    const mapStateToProps = function (state, props) {
        return {name: getCharacterName(state, props.id)};
    };

    return ReactRedux.connect(mapStateToProps)(Component);
})();

export const Description = (function () {
    const Component = function ({dispatch, description, ...attributes}) {
        Object.assign(attributes, {children: description});

        return <span {...attributes}/>;
    };

    const mapStateToProps = function (state, props) {
        return {description: getCharacterDescription(state, props.id)};
    };

    return ReactRedux.connect(mapStateToProps)(Component);
})();

export const Urls = (function () {
    const Component = function ({urls, className, ...attributes}) {
        if (!urls) return null;

        Object.assign(attributes, {
            className: "form-row " + (className || "")
        });

        return (
            <div {...attributes}>
                {lodash.map(urls, function ({type, url}) {
                    return (
                        <div className="col form-group" key={type}>
                            <a href={url} target="_blank" className="btn btn-dark btn-block">
                                {type}
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    };

    const mapStateToProps = (state, props) => {
        const {id} = props;

        return {urls: getCharacterUrls(state, id)};
    };

    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        return Object.assign({}, stateProps, ownProps);
    };

    return ReactRedux.connect(mapStateToProps, undefined, mergeProps)(Component);
})();

export const AppearsIn = (function () {
    const Component = function (props) {
        return (
            <div>
                <h3 className="text-center">Appears In</h3>
                <div className="card-columns">
                    {lodash.map(props.comics, (comic) => <Comic {...comic} key={comic.id}/>)}
                </div>
            </div>
        );
    };

    const makeMapStateToProps = () => {
        const getCharacterComics = makeGetCharacterComics();

        return (state, props) => {
            const {id} = props;

            return {comics: getCharacterComics(state, id)};
        };
    };

    return ReactRedux.connect(makeMapStateToProps)(Component);
})();
