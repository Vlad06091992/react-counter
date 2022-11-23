import React, {useEffect, useState} from "react";
import css from "./task2.module.css"
import {Counter} from "./Counter";
import {Settings} from "./Settings";

export const Task2 = () => {
    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)
    let [message, setMessage] = useState("Enter values and press \"set\"")
    let [disabledButton, setDisabledButton] = useState(true)
    let [setting, setSetting] = useState(true)

    const counterStyles = `${css.counter} + ${counter >= maxValue ? css.error : ''}`
    const messageStyles = message.length == 28 ? css.message : `${css.message} ${css.error}`
    const inputMaxStyle = (maxValue <= minValue) ? `${css.input} ${css.input_error}` : css.input
    const inputMinStyle = (message.length !== 28 || minValue < 0) ? `${css.input} ${css.input_error} ` : css.input


    useEffect(() => {
        setCounter(Number(localStorage.getItem("counterValue")))
        setMaxValue(Number(localStorage.getItem("max-value")))
        setMinValue(Number(localStorage.getItem("min-value")))
        setDisabledButton(Boolean(localStorage.getItem("DisabledButton")))
        setSetting(false)
    }, [])


    const counterOnclick = (num: number) => {
        setCounter(num)
        localStorage.setItem("counterValue", JSON.stringify(num))
    }

    const setValues = () => {
        setCounter(minValue)
        setDisabledButton(true)
        setSetting(false)

        localStorage.setItem("max-value", JSON.stringify(maxValue))
        localStorage.setItem("min-value", JSON.stringify(minValue))
        localStorage.setItem("counterValue", JSON.stringify(minValue))
        localStorage.setItem("DisabledButton", JSON.stringify(disabledButton))
        localStorage.setItem("setting", JSON.stringify(setting))
        console.log(minValue)

    }


    const onFocusForSetButton = () => {

        setDisabledButton(true)
        setSetting(true)
        localStorage.setItem("DisabledButton", JSON.stringify(disabledButton))
        localStorage.setItem("setting", JSON.stringify(setting))
    }


    return (
        <div className={css.task2}>
            <Settings
                inputMaxStyle={inputMaxStyle}
                inputMinStyle={inputMinStyle}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setMessage={setMessage}
                minValue={minValue}
                maxValue={maxValue}
                setDisabledButton={setDisabledButton}
                onFocusForSetButton={onFocusForSetButton}
                setValues={setValues}
                disabledButton={disabledButton}/>

            <Counter
                counterStyles={counterStyles}
                messageStyles={messageStyles}
                setting={setting}
                message={message}
                counter={counter}
                maxValue={maxValue}
                minValue={minValue}
                counterOnclick={counterOnclick}
            />
        </div>

    )
}