import React from "react";

export type AffairType2 = {
    _id: string
    name: string
    priority: string
}
type AlternativeAffairsRenderPropsType = {
    data: Array<AffairType2>
    setFilter: (filter: string) => void
    deleteAffair: (id: string) => void
}
const AlternativeAffairsRender2 = (props: AlternativeAffairsRenderPropsType) => {
    const mappedAffairs = props.data.map((a: AffairType2) => {
        return (
            <li key={a._id}>
                {a.name}
                <button onClick={() => {
                    props.deleteAffair(a._id)
                }}>X
                </button>
            </li>)
    })
    return (
        <div>
            {mappedAffairs}
            <button onClick={() => {
                props.setFilter("all")
            }}>All
            </button>
            <button onClick={() => {
                props.setFilter("high")
            }}>High
            </button>
            <button onClick={() => {
                props.setFilter("middle")
            }}>Middle
            </button>
            <button onClick={() => {
                props.setFilter("low")
            }}>Low
            </button>
        </div>
    )
}
export default AlternativeAffairsRender2
