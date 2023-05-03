type ButtonType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonType) => {
    const onclickHandler=() => {props.callback()}
    return (
            <button onClick={onclickHandler}>{props.name}</button>
     )
}





