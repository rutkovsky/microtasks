import React from 'react';
import {FilterType} from '../App';

type MoneyProps = {
    banknots: string
    value: number
    number: string
}

type PropsType = {
    currentMoney: MoneyProps[]
    onclickFilterHundler: (nameButton: FilterType) => void
}

export const Component = (props:PropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>{el.banknots}</span>
                                <span>{el.value}</span>
                                <span>{el.number}</span>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onclickFilterHundler('All')}>All</button>
                <button onClick={() => props.onclickFilterHundler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onclickFilterHundler('Dollars')}>Dollars</button>
            </div>
        </div>
     )
}





