import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/main/Main";
import {Todo} from "./components/Todo/Todo";
import TodoRedux from './components/Todo/TodoRedux';
import {Users} from "./components/Users";
import {connect} from 'react-redux';
import {loadUsers, loadUsersFailure, loadUsersSuccess} from "./actions/usersActions";
import {Loading} from "./components/global/Loading";
import {request, urls} from "./services/api";
import {store} from "./store";
import {addTodo} from "./actions/todoActions";
import {TodoTest} from "./components/Todo/TodoTest";

class App extends Component {

    componentWillMount(){
        const actions = {
            fetchSuccess: data => this.props.loadSuccess(data),
            fetchFailure: error => this.props.loadFailure(error)
        };
        request(urls.users, actions)
    }

    render() {
        return <div>
            <Header/>
            <Main>
                <TodoRedux/>
                <Loading loading={this.props.users.loading} loaded={this.props.users.loaded}
                error={this.props.users.error}>
                    <Users users={this.props.users.users}/>
                </Loading>
            </Main>
        </div>
    }
}


const mapStateToProps = store => {
    return {
        users: store.users,
        todo: store.todo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(loadUsers()),
        loadSuccess: (users) => dispatch(loadUsersSuccess(users)),
        loadFailure: status => dispatch(loadUsersFailure(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
