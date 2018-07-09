import React from 'react';
import {Input} from "../global/Input";

export class TodoTest extends React.Component {
    constructor(props){
        super(props);
        this.state = [];
    }
    render(){
        return <div>
            <input type="text" value={this.state} onChange={this.state}/>
            <button onClick={} type={} onSubmit={}>add</button>
            <ul>
                {this.state.map((item , index) => {
                    return <li key={index} value={item}>{item}</li>


                })

            }
            </ul>
        </div>
    }
}
export default TodoTest;