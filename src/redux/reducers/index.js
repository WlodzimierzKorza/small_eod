import { REMOVE_ITEM, ADD_ITEM, UPDATE_ITEM } from '../actions'

export default (state, { type, payload }) => {
    switch (type) {
        case ADD_ITEM:
            console.log(payload)
            return {
                ...state,
                [payload.type]: [...state[payload.type], payload.item],
            }
        default:
            return state
    }
}
