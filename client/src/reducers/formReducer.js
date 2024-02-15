function formReducer(state, action) {
    switch (action.type) {
        case 'name': {
            return {
                ...state,
                text: action.payload
            }
        }
        case 'priority': {
            return {
                ...state,
            }
        }
        default:
            return;
    }
}

export default formReducer;