import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:1
        }
    }

    state = {
        value:1
    }


    render(){
        return(
            <footer>
                {this.props.footerText}
                <div className="logo">Code news</div>
                <input />
            </footer>
        )
    }
}

export default Footer;