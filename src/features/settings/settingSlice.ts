import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SetGlobalDarkMode = {
    darkMode: boolean
}
type SetGlobalLanguage = {
    language: string
}
type InitialState = {
    darkMode: boolean,
    language: string
}

const initialState: InitialState = {
    darkMode: false,
    language: "en"
}


const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setGlobalDarkMode: (state, action: PayloadAction<SetGlobalDarkMode>) => {
            state.darkMode = action.payload.darkMode
        },
        setGlobalLanguage: (state, action: PayloadAction<SetGlobalLanguage>) => {
            console.log(action.payload.language)
            state.language = action.payload.language
        }
    }
})

export default settingSlice.reducer
export const { setGlobalDarkMode, setGlobalLanguage } = settingSlice.actions