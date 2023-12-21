import React from 'react';
import './App.css';
import {Button} from './Components/Button';

const App = () => {
    const Foo1 = () => {
        console.log('Message 1')
    }
    const Foo2 = (mes: string) => {
        console.log(mes+' привет')
    }
    return (
        <div className="App">
            <Button name={'Button 1'} onClickHandler={Foo1}/>
            <Button name={'Button 2'} onClickHandler={()=>Foo2('Message 2')}/>
        </div>
    )
}

export default App;
