import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any
    addUserCallback: any
}
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName);
            error && setError("")
        } else {
            setName("")
            setError("error")
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName("")
    }
    const onKeyPressAddValue = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name) {
            addUser();
            setName("")
        }

    }
    const totalUsers = users.length
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddValue={onKeyPressAddValue}
        />
    )
}

export default GreetingContainer
