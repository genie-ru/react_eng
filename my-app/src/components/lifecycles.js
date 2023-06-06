import React, { Component } from 'react';

class Life  extends Component {
    constructor(props){
        super(props);
        console.log('1-constructor')

        this.state = {name : 'John'}
    }

    static getDeriveStateFromProps(props,state){
        console.log('2-getDeriveStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('4-componentDidMount')

    }

    composenentWillUnmount(){
        console.log('x-composenentWillUnmount')
    }

    render(){
        console.log('3-render')
        return (
            <>
                Life
            </>
        )
    }
}

export default Life;