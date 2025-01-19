import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formLogin: {
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
            state.formLogin = action.payload
        },
        clearFormData: (state) => {
            state.formLogin = { 
                username: '', 
                email: '', 
                password: '', 
                module: '' 
            };
        }
    },
})

export const { setInitialValue, clearFormData } = formSlice.actions

export default formSlice.reducer