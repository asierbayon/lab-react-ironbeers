import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route path='/' component={Header}/>
            <Route exact path='/' component={ Homepage }/>
        </div>
    );
}

export default App;
