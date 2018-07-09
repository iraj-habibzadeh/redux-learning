import React, {Component} from 'react';
import {Input} from "../global/Input";

export class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo: 'sd'
        };
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    };

    handleAddTodo = () => {
        if (this.state.todo.length !== 0) {
            this.setState({
                todos: this.state.todos.concat(this.state.todo),
                todo: ''
            })
        } else {
            alert('vorodi bayad bedi')
        }
    };

    handleRemoveTodo = (i) => {
        this.setState({
            todos: this.state.todos.filter((item, index) => {
                if (index !== i) {
                    return item;
                }
            })
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render(){
        return <form onSubmit={this.handleSubmit}>
            <Input type="text" onChange={this.handleChange} value={this.state.todo}/>
            <button onClick={this.handleAddTodo}>Add</button>
            <ul>
                {this.state.todos.map((item, i) => {
                    return <li onClick={() => this.handleRemoveTodo(i)} key={i}>{item}</li>
                })}
            </ul>
        </form>
    }
}