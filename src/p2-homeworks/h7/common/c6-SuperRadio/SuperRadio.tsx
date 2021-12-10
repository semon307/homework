import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState, useEffect} from 'react'
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
 const [option, setOption] = useState(value)
    // useEffect(()=>{
    //     setOption(value)
    // },[value])

    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div className={s.main} key={i}>
            <label className={s.container}>
                <input type="radio" name="radio" onClick={() => {
                    setOption(o)
                    onChangeOption(o);

                    console.log(o)
                    console.log(option)
                }} />
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
