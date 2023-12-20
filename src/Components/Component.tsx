import React from 'react';

type ComponentPropsType = {
    data: DataPropsType[]
}

type DataPropsType = {
    manufacturer: string
    model: string
}

export const Component = (props: ComponentPropsType) => {
    return (
        <div>
            {props.data.map((el, index) => <table><tr key={index + 1}>{el.manufacturer} {el.model}</tr></table>)}
        </div>
    )
}





