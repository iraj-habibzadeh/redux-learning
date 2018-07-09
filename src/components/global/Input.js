import React, {Component} from 'react';
import '../../App.css'

export class Input extends Component{
    render(){
        const {type, className, style, value, onChange} = this.props;
        return <input type={type} style={style} onChange={onChange} className={'input-form ' + className} value={value}/>
    }
}