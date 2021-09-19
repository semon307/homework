import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    onKeyPressAddValue: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddValue} // деструктуризация пропсов
) => {


    return (
        <div>
            {/*<input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddValue}/>*/}
            <div>
                <SuperInputText value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddValue} error={error}/>
            </div>
            <div>
                <SuperButton onClick={() => {
                    addUser(name)
                }} disabled={!name}>add</SuperButton>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
