import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formData: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-LIMBERT'
    }
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInitialValue: (state, action) => {
            state.formData = action.payload
        },
    },
})

export const { setInitialValue } = formSlice.actions

export default formSlice.reducer