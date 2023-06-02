import React,{ Component } from 'react';



class Header extends Component {

    inputChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <>
                <header>
                    <div 
                        className="logo"
                        onClick={()=> { console.log('I was click')}}
                    >Logo</div>
                    <input
                        onChange={(e)=> this.inputChange(e)}
                    />
                </header>
            </>
        )
    }
}
export default Header;