import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'
import Newslist from './components/news_list';

import Header from './components/header';
import JSON from './db.json';
import Footer from './components/footer';
class App extends Component {

    state = {
        news:JSON,
        footerText:'I am a happy footer'
    }
    render(){
        console.log(this.state.news)
        return(
            <div className="hey">
                <Header/>
                <Newslist
                    news={this.state.news}
                >
                    <br/>
                    <h1>I am children</h1>
                </Newslist>

                <Footer
                    footerText={this.state.footerText}
                />
            </div>        
        )
    }
}

// const App = () => {

    
//     return(
//         <div className="hey">
//             <Header/>
//         </div>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)