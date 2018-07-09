import React, {Component} from 'react';

export class Main extends Component{
    render(){
        const {children, className} = this.props;
        return <main id="main" className={className}>
            {children}
        </main>
    }
}