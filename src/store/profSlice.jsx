import { createSlice } from "@reduxjs/toolkit";

const initState = {
    content: {
            company1: '',
            address1: '',
            position1: '',
            startDate1: '',
            endDate1: '',
            company2: '',
            adress2: '',
            position2: '',
            startDate2: '',
            endDate2: '',
    }
};

const profSlice = createSlice({
    name: 'prof',
    initialState: initState,
    reducers : {
        addCompany1: (state, action) => {
            state.company1 = action.payload
        },
        addAdress1: (state, action) => {
            state.address1 = action.payload
        },
        addPosition1: (state, action) => {
            state.position1 = action.payload
        },
        addStartDate1: (state, action) => {
            state.startDate1 = action.payload
        },
        addEndDate1: (state, action) => {
            state.endDate1 = action.payload
        },
        addCompany2: (state, action) => {
            state.company2 = action.payload
        },
        addAddress2: (state, action) => {
            state.address2 = action.payload
        },
        addPosition2: (state, action) => {
            state.position2 = action.payload
        },
        addStartDate2: (state, action) => {
            state.startDate2 = action.payload
        },
        addEndDate: (state, action) => {
            state.endDate2 = action.payload
        },
    }
});

export const profActions = profSlice.actions;
export default profSlice;

