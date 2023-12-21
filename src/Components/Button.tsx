import React from 'react';

type ButtonPropsType = {
    name: string
    onClickHandler: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClickHandler}>{props.name}</button>
    )
}