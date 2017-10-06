export const getCharacters = (state) => state.characters;

export const getCharacterIds = Reselect.createSelector(
    [getCharacters],
    (characters) => Object.keys(characters)
);
