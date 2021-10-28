import {PeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): Array<PeopleType> => {
    switch (action.type) {
        case 'SORT-UP': {

            return [...state.sort((a, b) => a.name.localeCompare(b.name))]
        }
        case "SORT-DOWN": {
            return [...state.sort((a, b) => a.name.localeCompare(b.name) * -1)]
        }


        case 'CHECK-AGE': {
            // need to fix
            return [...state.filter(item => item.age >= action.payload)]
        }
        default:
            return state
    }
}
export type ActionType =
    ReturnType<typeof SortUpAC>
    | ReturnType<typeof SortDownAC>
    | ReturnType<typeof CheckAgeAC>
const SortUpAC = () => {
    return {
        type: "SORT-UP",
    } as const
}
const SortDownAC = () => {
    return {
        type: "SORT-DOWN"
    } as const
}
const CheckAgeAC = () => {
    return {
        type: "CHECK-AGE",
        payload: 18
    } as const
}