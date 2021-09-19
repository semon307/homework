import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

export type AffairsPropsType = {
    data: Array<AffairType>
    setFilterCallback: (value: FilterType) => void
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a.name}
            deleteAffairCallback={props.deleteAffairCallback}
            id={a._id}
        />
    ))

    const setAll = () => {props.setFilterCallback("all")}
    const setHigh = () => {props.setFilterCallback("high")}
    const setMiddle = () => {props.setFilterCallback("middle")}
    const setLow = () => {props.setFilterCallback("low")}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
