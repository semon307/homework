import React, {Component, useState} from 'react'
import {AlternativeAffairs} from "./Alternative/AlternativeAffairs";
import Affairs from "./Affairs";


export type AffairPriorityType = "low" | "high" | "middle"
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type AffairsType = Array<AffairType>
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairsType, filter: FilterType) => {
    if (filter === 'all') return affairs
    else return affairs.filter((a => a.priority === filter))
}
export const deleteAffair = (affairs: AffairsType, _id: number) => {
    return affairs.filter((a => a._id !== _id))
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));
    const setFilterCallBack = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div>
            <hr/>
            homeworks 2
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <Affairs data={filteredAffairs} setFilterCallback={setFilterCallBack}
                     deleteAffairCallback={deleteAffairCallback}/>
            <hr/>
        </div>
    )
}


export default HW2
