import React, {useEffect} from "react";
import css from "./task3.module.css"


type SettingsPropsType = {
    error: boolean
    minValue: number
    maxValue: number
    setMaxValue: (n: number) => void
    setMinValue: (n: number) => void
}


export const Settings = (props: SettingsPropsType) => {


    const maxInputCallback = (e: any) => {
        props.setMaxValue(+e.currentTarget.value)
    }


    const minInputCallback = (e: any) => {
        props.setMinValue(+e.currentTarget.value)
    }

    return (
        <div className={css.settingsWrapper}>
            <div className={css.setting}>
                <div>max value:</div>
                <div>
                    <input className={props.error ? css.errorInput : css.input}
                           onChange={maxInputCallback}
                           defaultValue={props.maxValue}
                           type="number"/>
                </div>
            </div>
            <div className={css.setting}>
                <div>start value:</div>
                <div>
                    <input className={props.error ? css.errorInput : css.input}
                           onChange={minInputCallback}
                           defaultValue={props.minValue}
                           type="number"/></div>
            </div>
        </div>
    )

}