import axios from '../../axios'

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

// export const AUTH_REQUEST = 'AUTH_REQUEST'
// export const AUTH_SUCCESS = 'AUTH_SUCCESS'
// export const AUTH_FAILURE = 'AUTH_FAILURE'

export const addItem = (type, item) => (dispatch) => {
    return dispatch({
        type: ADD_ITEM,
        payload: {
            type,
            item,
        },
    })
}
