import {getCharacterThumbnail, getCharacterName, getCharacterDescription} from "./selectors";

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
