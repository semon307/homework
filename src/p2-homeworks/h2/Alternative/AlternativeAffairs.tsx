import React, {Component} from 'react'
import {v1} from "uuid";
import {AffairType2} from "./AlternativeAffairsRender";
import AlternativeAffairsRender2 from "./AlternativeAffairsRender";


type StateType = {
    todo: Array<AffairType2>
    filter: string
}

export class AlternativeAffairs extends React.Component {

    createAlternativeAffair(affair: string, priority: string) {
        return {
            _id: v1(),
            name: affair,
            priority
        }
    }

    state: StateType = {
        todo: [
            this.createAlternativeAffair("React", "high"),
            this.createAlternativeAffair("anime", "low"),
            this.createAlternativeAffair("games", "low"),
            this.createAlternativeAffair("work", "high"),
            this.createAlternativeAffair("html&css", "middle"),
        ],
        filter: ""
    }

    deleteAffair = (id: string) => {

        this.setState((state) => {
            const idx = this.state.todo.findIndex((el: AffairType2) => el._id === id);
            return {
                todo: [
                    ...this.state.todo.slice(0, idx),
                    ...this.state.todo.slice(idx + 1)
                ]
            }
        })
    }
    filterAffairs = (affairs: Array<AffairType2>, filter: string) => {
        if (filter === 'all') return affairs
        else return affairs.filter((a => a.priority === filter))
    }
    setFilter = (filter: string) => {
        this.setState({filter})
    }

    filter(items: Array<AffairType2>, filter: string) {
        switch (filter) {
            case "all":
                return items;
            case "high":
                return items.filter((item: AffairType2) => item.priority === "high");
            case "middle":
                return items.filter((item: AffairType2) => item.priority === "middle");
            case "low":
                return items.filter((item: AffairType2) => item.priority === "low");
            default:
                return items;
        }
    }

    render() {
        const {todo, filter} = this.state;
        const visibleItems = this.filter(todo, filter)
        return (
            <div>
                <AlternativeAffairsRender2 data={visibleItems}
                                           setFilter={this.setFilter}
                                           deleteAffair={this.deleteAffair}/>
            </div>
        )
    }
}




