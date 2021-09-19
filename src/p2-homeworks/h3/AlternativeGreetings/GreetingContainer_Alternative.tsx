import React, {ChangeEvent, KeyboardEvent} from 'react'
import Greeting_Alternative from './Greeting_Alternative'

type GreetingContainerPropsType = {
    users: Array<string>
    addUserCallback: (name: string) => void
}


class GreetingContainer_Alternative extends React.Component<GreetingContainerPropsType> {
    state = {
        name: "",
        error: false
    }
    setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value.trim()
            ? this.setState((state) => {
                return {
                    name: e.target.value,
                    error: false
                }
            })
            : this.setState((state) => {
                return {
                    error: true
                }
            })
    }
    addUser = (name: string) => {
        const trimmedName = this.state.name.trim()
        if (!trimmedName) {
            this.setState((state) => {
                return {
                    error: true
                }
            })
        } else {
            this.setState((state) => {
                return {
                    name: "",
                    error: false
                }
            })
            this.props.addUserCallback(trimmedName)
            alert(`Hello ${trimmedName} !`)
        }
    }
    onKeyPressAddValue = (e: KeyboardEvent<HTMLInputElement>) => {
            // this.setState((state) => {
            //     return {
            //         name: e.target.value,
            //         error: false
            //     }
            // })
        console.log("something")
    }
    render() {
        const totalUsers = this.props.users.length

        return (
            <Greeting_Alternative
                name={this.state.name}
                setNameCallback={this.setNameCallback}
                addUser={this.addUser}
                error={this.state.error}
                totalUsers={totalUsers}
                onKeyPressAddValue={this.onKeyPressAddValue}
            />
        )
    }
}

export default GreetingContainer_Alternative
