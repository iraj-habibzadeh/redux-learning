import React, {Component} from 'react';
import {Input} from "../global/Input";
import {connect} from 'react-redux';
import {addTodo, handleChangeInput, removeTodo} from "../../actions/todoActions";

class TodoRedux extends Component{
    render(){
        const {todos, todo, addTodo, removeTodo, handleChange} = this.props;
        return <form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" onChange={(e) => handleChange(e.target.value)} value={todo}/>
            <button onClick={() => addTodo(todo)}>Add</button>
            <ul>
                {todos.map((item, i) => {
                    return <li onClick={() => removeTodo(i)} key={i}>{item}</li>
                })}
            </ul>
        </form>
    }
}

const mapStateToProps = store => {
    return {
        todos: store.todo.todos,
        todo: store.todo.todo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addTodo(value)),
        removeTodo: (index) => dispatch(removeTodo(index)),
        handleChange: (value) => dispatch(handleChangeInput(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoRedux)