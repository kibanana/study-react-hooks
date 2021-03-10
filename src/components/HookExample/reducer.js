export default function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                [action.key]: [...state[action.key], action.value]
            }
        case 'delete':
            const temp = state[action.key];
            temp.pop();
            return {
                ...state,
                [action.key]: temp
            }
        default:
            throw new Error();
    }
}