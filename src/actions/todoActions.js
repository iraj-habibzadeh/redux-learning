export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export const handleChangeInput = value => {
    return {
        type: 'CHANGE_INPUT',
        value
    }
};

export const removeTodo = index => {
    return {
        type: 'REMOVE_TODO',
        index
    }
};