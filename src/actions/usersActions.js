export const loadUsers = () => {
    return {
        type: 'LOAD_USERS'
    }
};

export const loadUsersSuccess = users => {
    return {
        type: 'LOAD_USERS_SUCCESS',
        users
    }
};

export const loadUsersFailure = error => {
    return {
        type: 'LOAD_USERS_FAILURE',
        error
    }
};