import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'
import Newslist from './components/news_list';

import Header from './components/header';
import JSON from './db.json';

class App extends Component {

    state = {
        news:JSON,
    }
    render(){
        console.log(this.state.news)
        return(
            <div className="hey">
                <Header/>
                <Newslist
                    news={this.state.news}/>
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