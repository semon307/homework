import React, {useState} from 'react'
import Message, {MessageType} from "./Message";
import AlternativeMessage from "./AlternativeMessage/AlternativeMessage";
import {v1} from "uuid";

function HW1() {
    let [messages, setMessage] = useState<Array<MessageType>>([{
        id: v1(),
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    }])
    const messagesForRender = messages;
    const addMessageCallback = (message: string) => {
        const newMessage = {
            id: v1(),
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Some Name',
            message,
            time: '22:00',
        }
        const updatedMessages = [...messagesForRender, newMessage]
        setMessage(updatedMessages)
    }
    return (
        <div>
            <hr/>
            homeworks 1
            should work (должно работать)
            <Message
                messages={messagesForRender}
                addMessageCallback={addMessageCallback}
            />

            <hr/>
            <hr/>
        </div>
    )
}


// кнопочку и логику добавления сообщения попытался сделать с помощью классовых компонет
export class HW1_1 extends React.Component {
    createMessage(message: string) {
        return {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Some Name',
            message,
            time: '22:00',
        }
    }

    state = {
        messages: [
            this.createMessage("some message"),
        ]
    }
    addMessage = (text: string) => {
        const newMessage = this.createMessage(text);

        this.setState((state) => {
            const newArray = [...this.state.messages, newMessage];
            return {
                messages: newArray
            }
        })
    }

    render() {
        const {messages} = this.state

        return (
            <div>
                <hr/>
                <AlternativeMessage
                    messages={messages}
                    onAddMessage={this.addMessage}
                />
                <hr/>
            </div>
        )
    }
}

export default HW1
