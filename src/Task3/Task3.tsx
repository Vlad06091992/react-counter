import React, {useEffect, useState} from "react";
import css from "./task3.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import {Settings} from "./Settings";

export const Task3 = () => {
    let [currentValue, setCurrentValue] = useState<number>(0 || Number(localStorage.getItem("currentValue")))
    let [minValue, setMinValue] = useState(Number(localStorage.getItem("minValue")) || 0)
    let [maxValue, setMaxValue] = useState(Number(localStorage.getItem("maxValue")) || 5)
    let [setting, setSetting] = useState(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        setCurrentValue(Number(localStorage.getItem("currentValue")))
        setMinValue(Number(localStorage.getItem("minValue")) || minValue)
        setMaxValue(Number(localStorage.getItem("maxValue")) || maxValue)

        if (window.location.pathname == "/") {
            setSetting(false)
        } else {
            setSetting(true)
        }

    }, [])

    useEffect(() => {
        if (minValue >= maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }, [minValue, maxValue])

    const counterStyles = `${css.counter} + ${currentValue >= maxValue ? css.counter_limit : ''}`


    const counterOnclick = (num: number) => {
        setCurrentValue(num)
        localStorage.setItem("currentValue", JSON.stringify(num))
    }

    const buttonDisableStyle = {
        "opacity": 0.5,
        "cursor": "default"
    }

    const buttonCallbackSetStyle = () => {
        return minValue >= maxValue ? buttonDisableStyle : {}
    }
    const buttonSetClick = (e: any) => {
        if (error) {
            e.preventDefault()
            setSetting(true)
        } else {
            setSetting(!setting)
            setCurrentValue(minValue)
            if (setting) {
                localStorage.setItem("currentValue", JSON.stringify(minValue))
                localStorage.setItem("minValue", JSON.stringify(minValue))
                localStorage.setItem("maxValue", JSON.stringify(maxValue))
            }
        }


    }

    const linkCallback = () => {
        return setting ? '/' : '/settings'
    }


    return (
        <div className={css.task}>
            <div className={css.display}>
                <Routes>
                    <Route path={'/'} element={<div className={counterStyles}>{currentValue}</div>}/>
                    <Route path={'/settings'}
                           element={
                               <Settings
                                   error={error}
                                   minValue={minValue}
                                   maxValue={maxValue}
                                   setMaxValue={setMaxValue}
                                   setMinValue={setMinValue}
                               />}
                    />
                </Routes>
            </div>
            <div className={css.buttons}>
                <button hidden={setting} className={css.button} disabled={currentValue >= maxValue}
                        onClick={() => counterOnclick(++currentValue)}>inc
                </button>
                <button
                    hidden={setting}
                    className={css.button}
                    onClick={() => counterOnclick(minValue)}>reset
                </button>
                <NavLink style={buttonCallbackSetStyle}
                         className={css.link}
                         onClick={buttonSetClick}
                         to={linkCallback()}>set</NavLink>
            </div>
        </div>
    )
}