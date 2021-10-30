import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    // const onChangeDoubleRange = (values: Array<number>) => {
    //     if (values[2] === 0){
    //         setValue1(values[0])
    //     } else {
    //         setValue2(values[1])
    //     }
    // }
    const onLeftChangeRange = (value: number) => {
        setValue1(value)
    }
    const onRightChangeRange = (value: number) => {
        setValue2(value)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <div>{value1}</div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onLeftChangeRange={onLeftChangeRange}
                    onRightChangeRange={onRightChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
