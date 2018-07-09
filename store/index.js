import {createStore} from 'redux';
import {todo} from '../reducers/todo'
import {combineReducers} from 'redux'
import {test} from "../reducers/test";
import {users} from "../reducers/users";
import {addTodo} from "../actions/todoActions";

const reducers = combineReducers({
    todo,
    test,
    users
});

export const store = createStore(reducers);

