import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/beers/BeerList';

function App() {
    return (
        <div className="App">
            <Route path='/' component={Header}/>
            <Route exact path='/' component={ Homepage }/>
            <Route path='/beers' component={BeerList} />
        </div>
    );
}

export default App;
