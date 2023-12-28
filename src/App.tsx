import React, {Fragment, useState} from 'react';
import './App.css';
import {FullInput} from './Components/FullInput';

const App = () => {
    const [message, setMessage] = useState([
        {message: 'Message 1'},
        {message: 'Message 2'},
        {message: 'Message 3'},
    ])

    function addMessage (title: string) {
        let NewMessage = {message: title}
        setMessage([NewMessage, ...message])
    }

    return (
        <div className="App">
            <div>
                <FullInput addMessage={addMessage}/>
                <div>
                    {message.map((el, index) => <div key={index}>{el.message}</div>)}
                </div>
            </div>
        </div>
    )
}

export default App;
