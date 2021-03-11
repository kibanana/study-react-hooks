export default function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                [action.key]: action.value
            }
        case 'delete':
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            throw new Error();
    }
}