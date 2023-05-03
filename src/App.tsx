import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from './Components/Button';

const App = () => {
    // const Button1Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button2Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button3Foo = (text: string) => {
    //     console.log(text)
    // }
    let [a, setA] = useState(1)
    const onClickFoo = () => {
        console.log(a)
        setA(++a)
    }
    const onClickFoo0 = () => {
        setA(0)
    }
    return (
        <div className="App">
            {/*<Button name={'MyYouTubeChanel-1'}*/}
            {/*        callback={() => Button1Foo('Vasya', 11)}/>*/}
            {/*<Button name={'MyYouTubeChanel-2'}*/}
            {/*        callback={() => Button2Foo('Ivan', 100)}/>*/}
            {/*<Button name={'MyYouTubeChanel-3'}*/}
            {/*        callback={() => Button3Foo('Im stupid button')}/>*/}
            <h1>{a}</h1>
            <button onClick={onClickFoo}>number</button>
            <button onClick={onClickFoo0}>0</button>
        </div>
    )
}

export default App;
