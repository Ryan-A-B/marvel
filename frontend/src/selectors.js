export const getAsync = (state) => state.async;
export const getAsyncValue = (state, key) => getAsync(state)[key];
