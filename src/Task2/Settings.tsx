import css from "./task2.module.css";
import React from "react";


type SettingsPropsType = {
    inputMaxStyle:any
    inputMinStyle:any
    setMaxValue:(n:number)=>void
    setMinValue:(n:number)=>void
    setMessage:(str:string)=>void
    minValue:number
    maxValue:number
    setDisabledButton:(arg:boolean)=>void
    onFocusForSetButton:()=>void
    setValues:()=>void
    disabledButton:boolean

}

export const Settings = (props:SettingsPropsType) => {
    return(
        <div className={css.task2}>
            <div className={css.task}>
                <div className={css.wrapper}>
                    <div className={css.counterStylesLeft}>
                        <div className={css.counter_texts}>
                            <div className={css.text}> max value:</div>
                            <div className={css.text}>start value:</div>
                        </div>
                        <div className={css.counter_inputs}>


                            <input
                                className={props.inputMaxStyle}
                                defaultValue={Number(localStorage.getItem("max-value"))}
                                onChange={(e) => {
                                    props.setMaxValue(+e.currentTarget.value)
                                    if (+e.currentTarget.value <= props.minValue || props.minValue < 0) {
                                        props.setMessage("Incorrect Value!")
                                        props.setDisabledButton(true)

                                    } else {
                                        props.setMessage("Enter values and press \"set\"")
                                        props.setDisabledButton(false)

                                    }
                                }}

                                onFocus={props.onFocusForSetButton}
                                type="number"/>


                            <input
                                className={props.inputMinStyle}
                                defaultValue={Number(localStorage.getItem("min-value"))}
                                onChange={(e) => {
                                    props.setMinValue(+e.currentTarget.value)
                                    if (+e.currentTarget.value >= props.maxValue || +e.currentTarget.value < 0) {
                                        props.setMessage("Incorrect Value!")
                                        props.setDisabledButton(true)
                                    } else {
                                        props.setMessage("Enter values and press \"set\"")
                                        props.setDisabledButton(false)
                                    }
                                }}
                                onFocus={props.onFocusForSetButton}
                                type="number"/>
                        </div>
                    </div>
                </div>
                <div className={css.buttons}>
                    <button
                        onClick={props.setValues}
                        className={css.button}
                        disabled={props.disabledButton}
                    >set
                    </button>


                </div>

            </div>
        </div>
            )
}

