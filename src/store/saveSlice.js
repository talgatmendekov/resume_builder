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
		resumeId: (state, action) => {
			console.log(action.payload, 'resumeID')
			state.resumeId =
				action.payload 
		},
		showModal: (state)  => {
			state.modal = true
		},
		hideModal: (state) => {
			state.modal = false
		},
		editExperience:(state, action) => {
			const resumeId = action.payload.resumeId
			const experienceId = action.payload.id
			const experienceValues = action.payload.values
			const editedExperience = state.resumes.map((el) => {
				if (el.id === resumeId) {
					el.content.experience = el.content.experience.map((el) => {
						if (el.id === experienceId) {
							el = experienceValues
						}
						return el
					})
					
				}
				return el
			})
			state.resumes = editedExperience
		},
		editEducation: (state, action) => {
			const resumeId = action.payload.resumeId;
			const eductionId = action.payload.id;
			const educationValues = action.payload.values;
			const editedEducation = state.resumes.map((el) => {
				if(el.id === resumeId) {
					el.content.education = el.content.education.map((el) => {
						if(el.id === eductionId) {
							el = educationValues
						}
						return el
					})
				}
				return el
			})
			state.resumes = editedEducation;
		}
	},
})

export const saveActions = saveSlice.actions
export default saveSlice
