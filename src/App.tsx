import React, {useState} from 'react';
import './App.css';
// import {FullInput} from './Components/FullInput';
import {Button} from './Components/Button';
import {Input} from './Components/Input';

const App = () => {
    const [message, setMessage] = useState([
        {message: 'Message 1'},
        {message: 'Message 2'},
        {message: 'Message 3'},
    ])

    let [title, setTitle] = useState('')

    function addMessage() {
        let NewMessage = {message: title}
        setMessage([NewMessage, ...message])
        setTitle('')
    }

    return (
        <div className="App">
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} addMessage={addMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}
        </div>
    )
}

export default App;
