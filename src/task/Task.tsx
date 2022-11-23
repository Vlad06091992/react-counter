import React, {useEffect, useState} from "react";
import css from "./task.module.css"
import {json} from "stream/consumers";

export const Task = () => {
    let [counter, setCounter] = useState<number>(0)
    const counterStyles = `${css.counter} + ${counter >= 5 ? css.counter_limit : ''}`

    useEffect(() => {
        setCounter(Number(localStorage.getItem("counterValue")))
    },[])

    const counterOnclick = (num: number) => {
        setCounter(num)
        localStorage.setItem("counterValue", JSON.stringify(num))
    }


    return (
        <div className={css.task}>
            <div className={counterStyles}>{counter}</div>
            <div className={css.buttons}>
                <button className={css.button} disabled={counter >= 5} onClick={() => counterOnclick(++counter)}>inc
                </button>
                <button className={css.button} disabled={counter == 0} onClick={() => counterOnclick(0)}>reset</button>
            </div>
        </div>
    )
}