const createSlice = require('@reduxjs/toolkit').createSlice

const clockingSlice = createSlice({
    name:'clocking',
    initialState: {
        user: {
            id: ""
        },
        errorAlert: {
            show : false,msg : "", class:"alert alert-danger"
        },
        disableBtn: false,
        clockStatus : {
            type : "Check-in",
            status : "Normal",
            show : false
        }
    },
    reducers: {
        clockingSuccess: (state,action) => {
            state.errorAlert = {show : true, msg:action.payload.successMsg, class:"alert alert-success"};
            state.disableBtn = true;
            state.clockStatus = action.payload.clockingData
        },
        clockingFail: (state,action) => {
            state.errorAlert = {show : true, msg:action.payload.msg, class:action.payload.class};
            state.disableBtn = true;
        },
        setErrorAlert: (state,action) => {
            state.errorAlert = {show : action.payload.show, msg:action.payload.msg, class:action.payload.class}

        },
        onChangeInput: (state, action) => {
            state.user.id = action.payload.id;
            state.errorAlert = {show : false, msg: ""}
            state.disableBtn = false;
            state.clockStatus.show = false;
        }
    }
})

export default clockingSlice.reducer
export const { clockingSuccess, clockingFail, setErrorAlert, onChangeInput } = clockingSlice.actions

