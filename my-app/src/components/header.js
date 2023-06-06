import React,{ Component } from "react";

class Header extends Component {

    state = {
        active: false,
        keywords:'',
    }

    
    inputChange = (event) => {
        const value = event.target.value === '' ? false : true;
        this.setState({
            active:value,
            keywords: event.target.value
        })
    }

    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true
        })
    }

    render(){
        //console.log(this.state)
        return (
            <>
                {/* <header style={{background: `${this.state.active ? 'red':'blue'}`}}> */}
                <header className={this.state.active ? 'active' : 'non-active'}>
                    <div className="logo">Code news</div>
                    <input onChange={(e)=> this.inputChange(e)} />
                    <button onClick={()=> this.changeColor()}>Change it</button>
                </header>
            </>
        )
    }

}

export default Header;