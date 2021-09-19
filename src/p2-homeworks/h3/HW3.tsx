import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])
    const realUsers = users;

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name}
        const updatedUsers = [newUser, ...realUsers]
        setUsers(updatedUsers)
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={realUsers} addUserCallback={addUserCallback}/>

            <hr/>
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
