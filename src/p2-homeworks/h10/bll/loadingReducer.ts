export type InitialStateType = {
    isLoading: boolean
}
const initState: InitialStateType = {
    isLoading: false
}
type ActionType = ReturnType<typeof loadingAC>
export const loadingReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "TOGGLE-IS-LOADING",
        isLoading,
    } as const
} // fix any