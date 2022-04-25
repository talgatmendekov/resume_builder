import { createSlice } from '@reduxjs/toolkit'

const initState = {
	resumes: JSON.parse(localStorage.getItem('allResumes')) || [],
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
			state.resumeId =
				action.payload 
		},
		showModal: (state)  => {
			state.modal = true
		},
		hideModal: (state) => {
			state.modal = false
		},

		editHeader: (state, action) => {
			const headerId = action.payload.id
			const headerValues = action.payload
			const editedHeader = state.resumes.map(el => {
				if(el.id === headerId) {
					el.content.header = headerValues
				}
				return el
			})
			state.resumes = editedHeader
		},

		editExperience:(state, action) => {
			const resumeId = action.payload.resumeId
			const experienceId = action.payload.id
			const experienceValues = action.payload
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
			console.log(state, "state")
		},
		editEducation: (state, action) => {
			const resumeId = action.payload.resumeId;
			const educationId = action.payload.id;
			const educationValues = action.payload
			const editedEducation = state.resumes.map((el) => {
				if(el.id === resumeId) {
					el.content.education = el.content.education.map((el) => {
						if(el.id === educationId) {
							el = educationValues
						}
						return el
					})
				}
				return el
			})
			state.resumes = editedEducation;
		},

		editSkills: (state, action) => {
			const resumeId = action.payload.resumeId
			const skillId = action.payload.id
			const skillValue = action.payload
			const editedSkills = state.resumes.map(el => {
				if (el.id === resumeId) {
					el.content.skills = el.content.skills.map((el) => {
						if (el.id === skillId){
							el = skillValue
						}
						return el
					})
				}
				return el
			})
			state.resumes = editedSkills
		},
		deleteSkillButton: (state, action) => {
			
			const deletedSkillButton = state.resumes.map((el) => {
				if(el.id === action.payload.resumeId) {
					el.content.skills = el.content.skills.filter((el) => el.id !== action.payload.id)
					
				}
				return el
			})
			state.resumes = deletedSkillButton
		},
	},
})

export const saveActions = saveSlice.actions
export default saveSlice
