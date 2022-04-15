import { createSlice } from '@reduxjs/toolkit'

const initState =JSON.parse(localStorage.getItem('@resumeData')) ||  {
	content: {
		header: {
			fullName: '',
			address: '',
			city: '',
			state: '',
			zipCode: '',
			phone: '',
			email: '',
		},
		
	},
}
const builderSlice = createSlice({
	name: 'header',
	initialState: initState,
	reducers: {
		addHeaderContent(state, action) {
			state.content.header = action.payload
		},

	},
})

export const builderActions = builderSlice.actions
export default builderSlice
