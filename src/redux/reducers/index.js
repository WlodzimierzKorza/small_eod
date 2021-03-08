import { REMOVE_ITEM, ADD_ITEM, UPDATE_ITEM } from '../actions'

export default (state, { type, payload }) => {
    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                [payload.name]: payload.value,
            }
        default:
            return state
    }
}
