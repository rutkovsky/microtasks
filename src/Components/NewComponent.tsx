import React from 'react';

type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}

type FilterType = 'all' | 'RUBLS' | 'Dollars'

type NewComponentPropsType = {
    onClickButtonHandler: (nameButton: FilterType) => void
    currentMoney: MoneyPropsType[]
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <div>
                {props.currentMoney.map((el, index) => <li key={index}>{el.value} {el.banknots} {el.number}</li>)}
            </div>
            <>
                <button onClick={() => (props.onClickButtonHandler('all'))}>all</button>
                <button onClick={() => (props.onClickButtonHandler('RUBLS'))}>RUBLS</button>
                <button onClick={() => (props.onClickButtonHandler('Dollars'))}>Dollars</button>
            </>
        </div>
    )
}

