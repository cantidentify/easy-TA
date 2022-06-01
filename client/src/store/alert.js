const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    alert: false
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        toggleShow: (state, action) => {
            console.log(action.payload)
            state.alert = !action.payload.show
        }
    }
})

export default alertSlice.reducer
const { toggleShow } = alertSlice.actions
export const toggle = (show) => dispatch => {
    dispatch(toggleShow({show}))
}