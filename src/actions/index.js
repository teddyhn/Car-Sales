export const ADD_ITEM = 'ADD_ITEM';
export const addItem = index => {
    return { type: ADD_ITEM, payload: index }
}