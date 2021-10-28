import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"
// export type UserType =
export type PeopleType = {
    _id: number
    name: string
    age: number
}
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<PeopleType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: PeopleType) => (
        <div key={p._id} >
            <div className={s.peopleData}>
                <div className={s.name}>{p.name}</div>
                <div className={s.age}>{p.age}</div>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-UP'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-DOWN'}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK-AGE', payload: 18}))

    return (
        <div className={s.main}>
            <hr/>
            <span>homeworks 8</span>


            {/*should work (должно работать)*/}

                {finalPeople}


            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>check 18</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
