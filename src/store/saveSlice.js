import { createSlice } from '@reduxjs/toolkit'

const initState = {
	resumes: [],
	resumeId: null,
}

const saveSlice = createSlice({
	name: 'save',
	initialState: initState,
	reducers: {
		saveResume: (state, action) => {
			const resumeContent = action.payload
			state.resumes.push(resumeContent)
		},
		resumeId(state, action) {
			state.resumeId = action.payload
		},
	},
})

export const saveActions = saveSlice.actions
export default saveSlice
