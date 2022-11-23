import css from "./task2.module.css";
import React from "react";

type CounterPropsType = {
    messageStyles:any
    counterStyles:any
    setting:boolean
    message:string
    counter:number
    maxValue:number
    minValue:number
    counterOnclick:(num:number)=>void

}

export const Counter = (props: CounterPropsType) => {


    return (
        <div className={css.task}>
        <div className={css.display}>
            {props.setting && <div className={props.messageStyles}>{props.message}</div>}
            {!props.setting && <div className={props.counterStyles}>{props.counter}</div>}
        </div>
        <div className={css.buttons}>
            <button className={css.button} disabled={props.counter >= props.maxValue || props.setting} onClick={() => {
                props.counterOnclick(props.counter + 1)
            }}>inc
            </button>
            <button disabled={props.setting} className={css.button} onClick={() => props.counterOnclick(props.minValue)}>reset
            </button>
        </div>
    </div>)
}

