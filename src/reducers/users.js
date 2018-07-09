const initialState = {
    loading: true,
    loaded: false,
    users: [],
    error: ''
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                loading: true,
                loaded: false
            }
        case 'LOAD_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                loaded: true,
                users: action.users
            }
        case 'LOAD_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            }
        default:
            return state;
    }
};