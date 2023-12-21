import React, {useState} from 'react';
import './App.css';
import {Button} from './Components/Button';

const App = () => {
    let [A, setA] = useState(1)
    const Foo1 = () => {
        setA(A-1)
    }
    const Foo2 = () => {
        setA(A+1)
    }
    const Foo3 = () => {
        setA(A=0)
    }
    return (
        <div className="App">
            <div>{A}</div>
            <Button name={'-'} onClickHandler={Foo1}/>
            <Button name={'+'} onClickHandler={Foo2}/>
            <Button name={'0'} onClickHandler={Foo3}/>
        </div>
    )
}

export default App;
