import React, {Component} from 'react'

export class Loading extends Component{
    render(){
        const {loading, loaded, error, children} = this.props;
        return loading && !loaded ? <p>loading</p> :
            !loading && loaded ? children : <p>{error}</p>
    }
}