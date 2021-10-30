import React, {ChangeEvent} from 'react'
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    onLeftChangeRange?: (value: number) => void
    onRightChangeRange?: (value: number) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        onLeftChangeRange,
        onRightChangeRange
        // min, max, step, disable, ...
    }
) => {
    const onLeftChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onLeftChangeRange && onLeftChangeRange(+e.currentTarget.value)
    }
    const onRightChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onRightChangeRange && onRightChangeRange(+e.currentTarget.value)
    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <div>
            <input onChange={onLeftChangeCallback} type="range" min="0" max="100" value={value ? value[0] : 0} className={s.slider} id="lower"/>
                <input onChange={onRightChangeCallback} type="range" min="0" max="100" value={value ? value[1] : 100} className={s.slider} id="higher"/>
            </div>

        </>
    )
}

export default SuperDoubleRange
