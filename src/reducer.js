import * as ACTION from './action'

export default function reducer(state, action) {
    switch (action.type) {
        case ACTION.CURRENT_USER:
        case ACTION.HOBBY:
        case ACTION.HOBBYCOUNT:
        case ACTION.TODO:
        case ACTION.TODOCOUNT:
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state;
    }
}