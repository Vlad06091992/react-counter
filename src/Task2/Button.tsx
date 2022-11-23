
type ButtonType = {
    name:string
}

export const Button = (props:ButtonType) => {

    return <button>{props.name}</button>
}