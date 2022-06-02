const createSlice = require('@reduxjs/toolkit').createSlice

const signInSlice = createSlice({
    name : 'signIn',
    initialState : {
        id:"",
        password:""
    },
    reducers: {
        idChange : (state, action) => {
            
        },
        passwordChange : (state, action) => {

        }
    }
})

export default signInSlice.reducer
export const { idChange, passwordChange } = signInSlice.actions