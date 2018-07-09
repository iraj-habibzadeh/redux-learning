const initialState = {
    todos: [],
    todo: ''
};

export const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.concat(state.todo),
                todo: ''
            };
        case 'CHANGE_INPUT':
            return {
                ...state,
                todo: action.value
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo, i) => {
                    if (action.index !== i) {
                        return todo;
                    }
                })
            };
        default:
            return state;
    }
};