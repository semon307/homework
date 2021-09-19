import React from 'react'
import s from "./AlternativeMessage.module.css"

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessagesType = Array<AlternativeMessagePropsType>
type AlternativeMessagePropsTypeMessages = {
    messages: MessagesType
    onAddMessage: (label: string) => void
}

class AlternativeMessage extends React.Component<AlternativeMessagePropsTypeMessages> {
    state = {
        label: ""
    }
    onLabelChange = (e: any) => {
        this.setState({label: e.target.value.toLowerCase()})
    }
    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.onAddMessage(this.state.label)
        this.setState({
            label: ""
        })
    }

    render() {
        const elements = this.props.messages.map((item: any) => {
            return (
                <div>
                    <div>
                        <img src={item.avatar} className={s.img} alt={""}/>
                        <div className={s.bubble}>
                            <div className={s.name}>{item.name}</div>
                            <div>
                                <span className={s.message}>{item.message}</span>
                                <span className={s.time}>{item.time}</span>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {elements}
                <input value={this.state.label} type="text" onChange={this.onLabelChange} placeholder="Type here"
                />
                <button type="button" className="btn btn-outline-secondary" onClick={this.onSubmit}>Send
                    Message
                </button>
            </div>
        )
    }
}

export default AlternativeMessage
