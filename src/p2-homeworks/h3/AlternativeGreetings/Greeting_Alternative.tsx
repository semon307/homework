import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting_Alternative.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: boolean
    totalUsers: number
    onKeyPressAddValue: (e: KeyboardEvent<HTMLInputElement>) => void
}


const Greeting_Alternative: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddValue} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddValue}/>
            <div>
            <span className={s.text}>{error && "name is required"}</span>
            </div>
            <button onClick={() => {addUser(name)}} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting_Alternative
