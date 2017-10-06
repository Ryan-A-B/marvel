export const getSearch = (state) => state.search;
export const getCharacters = (state) => state.characters;

export const getFilteredCharacters = Reselect.createSelector(
    [getCharacters, getSearch],
    (characters, search) => {
        if (!search) {
            return characters;
        }

        try {
            var regex = new RegExp(search, "i");

            return lodash.reduce(characters, function (filteredCharacters, character, id) {
                if (regex.test(character.name)) {
                    Object.assign(filteredCharacters, {[id]: character});
                }

                return filteredCharacters;
            }, {});
        } catch (e) {
            return characters;
        }
    }
);

export const makeGetCharacterIds = (getCharacters) => {
    return Reselect.createSelector(
        [getCharacters],
        (characters) => Object.keys(characters)
    );
};

export const getCharacterIds = makeGetCharacterIds(getCharacters);
export const getFilteredCharacterIds = makeGetCharacterIds(getFilteredCharacters);
