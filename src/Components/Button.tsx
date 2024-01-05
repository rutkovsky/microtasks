import React from 'react';

type ButtonPropsType = {
    name: string
    addMessage: () => void
}

export const Button = (props: ButtonPropsType) => {

    function onClickButtonHandler() {
        props.addMessage()
    }

    return (
            <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};