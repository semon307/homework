import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChangeOption(e)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        // <label key={name + '-' + i}>
        //     <input
        //         type={'radio'}
        //         // value={o}
        //         onClick={() => {onChangeOption(o)}}
        //         checked={o === value}
        //         // name, checked, value, onChange
        //     />
        //     {o}
        // </label>
        <div className={s.main}>
            <label className={s.container}>
                <input type="radio" name="radio" onClick={() => {
                    onChangeOption(o)
                }} checked={o === value}/>
                <span className={s.checkmark}></span>{o}
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
            {/*<h1>Custom Radio Buttons</h1>*/}
            {/*<label className={s.container}>One*/}
            {/*    <input type="radio" checked name="radio"/>*/}
            {/*        <span className={s.checkmark}></span>*/}
            {/*</label>*/}
            {/*<label className={s.container}>Two*/}
            {/*    <input type="radio" name="radio"/>*/}
            {/*        <span className={s.checkmark}></span>*/}
            {/*</label>*/}

        </>
    )
}

export default SuperRadio
