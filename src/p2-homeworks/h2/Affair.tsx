import React from 'react'

type AffairPropsType = {

    affair: string
    deleteAffairCallback: (id: number) => void
    id: number
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}

    return (
        <div>
            {props.affair}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
