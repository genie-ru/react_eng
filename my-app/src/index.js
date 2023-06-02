import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'
const App = () => (
    <>
        <h1 className="Hi">Hi there!</h1>
        <Header/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);