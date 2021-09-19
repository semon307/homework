import React, {ChangeEvent, useState} from 'react'
import s from './Message.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type MessageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
}
export type MessagePropsType = {
    messages: Array<MessageType>
    addMessageCallback: (message: string) => void
}

const Message: React.FC<MessagePropsType> = (props) => {
    const [title, setTitle] = useState<string>("");
    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addMessage = (title: string) => {
        props.addMessageCallback(title);
        setTitle("")
    }
    const elements = props.messages.map(el => {
        return <div key={el.id}>
            <img src={el.avatar} className={s.img} alt={""}/>
            <div className={s.bubble}>
                <div className={s.name}>{el.name}</div>
                <div>
                    <span className={s.message}>{el.message}</span>

                    <span className={s.time}>{el.time}</span>
                </div>
            </div>
        </div>

    })
    return (
        <div>
            {elements}
            <div>
                <SuperInputText value={title} onChange={onTitleChange}/>
                <SuperButton onClick={() => {
                    addMessage(title)
                }}>send message</SuperButton>
            </div>
        </div>
    )
}

export default Message
