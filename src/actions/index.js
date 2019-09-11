export const ADD_ITEM = 'ADD_ITEM';
export const addItem = id => {
    return { type: ADD_ITEM, payload: id }
}