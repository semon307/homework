import React from 'react'
import GreetingContainer_Alternative from './GreetingContainer_Alternative'
import {v1} from "uuid";



export type UserType = {
    _id: string
    name: string
}


class HW3_1 extends React.Component {
    createUser = (name: string) => {
        return {
            _id: v1(),
            name
        }
    }
    state = {
        users: []
    }
    addUserCallBack = (name: string) => {
        this.setState((state) => {
            const newUser = this.createUser(name);
            const newArray = [this.state.users, newUser]
            return {
                users: newArray
            }
        })
    }
    render() {


        return (
            <div>
                <hr/>

                <GreetingContainer_Alternative users={this.state.users} addUserCallback={this.addUserCallBack}/>

                <hr/>

                <hr/>
            </div>
        )
    }
}

export default HW3_1
