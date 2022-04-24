import { createSlice } from '@reduxjs/toolkit'

const initState = {
	resumes: [],
	resumeId: null,
	modal: false,
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
			state.resumeId =
				action.payload || state.resumes[state.resumes.length - 1].id
		},
		showModal(state) {
			state.modal = true
		},
		hideModal(state) {
			state.modal = false
		},
		editExperience(state, action) {
			console.log(action.payload)
			state.resumes.map((el) => {
				if (el.id === action.payload.resumeId) {
					el.content.experience = el.content.experience.map((el) => {
						if (el.id === action.payload.id) {
							el = action.payload.values
						}
						return el
					})
				}
				return el
			})
		},
	},
})

export const saveActions = saveSlice.actions
export default saveSlice
