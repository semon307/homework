export type ThemesType = "default" | "dark" | "red" | "some"
type themeReducerInitialStateType = {
    theme: ThemesType
}
type ActionsType = ReturnType<typeof changeThemeC>
const initState: themeReducerInitialStateType = {
    theme: "default"
};

export const themeReducer = (state = initState, action: ActionsType): themeReducerInitialStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType) => {
    return {
        type: "SET-THEME",
        theme
    } as const
}; // fix any