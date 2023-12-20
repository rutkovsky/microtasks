import React from 'react';
import './App.css';
import {Component} from './Components/Component';

const App = () => {
    let data = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div className="App">
            <Component data={data}/>
        </div>
    )
}

export default App;
