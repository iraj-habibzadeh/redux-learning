import React, {Component} from 'react';

export class Users extends Component{
    render(){
        return <div id="users">
            {this.props.users.map(user => {
                return <div key={user.id} className="user">
                    <h2>{user.email}</h2>
                    <p>{user.phone}</p>
                    <p>{user.username}</p>
                </div>
            })}
        </div>
    }
}