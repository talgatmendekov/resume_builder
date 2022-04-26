import { createSlice } from '@reduxjs/toolkit'

const initState = {
	content: JSON.parse(localStorage.getItem('@resumeData')) || {
		header: {},
		experience: [],
		education: [],
		skills: [],
	},
	color: '#464746',
	control: false,
}
const builderSlice = createSlice({
	name: 'builder',
	initialState: initState,
	reducers: {
		changeFontColor:(state, action) => {
			console.log(action.payload, "color");
			state.color = action.payload
		},
		addHeaderContent:(state, action) => {
			const headerContent = action.payload
			const phone = action.payload.phone
			state.content.header = headerContent
			state.content.header.phone = phone
		},
		addExperienceContent: (state, action) => {
			const experienceContent = action.payload
			state.content.experience.push(experienceContent)
			
		},
		addEducationContent: (state, action) => {
			const educationContent = action.payload
			state.content.education.push(educationContent)
		},
		addSkillsContent: (state, action) => {
			const skillName = action.payload
			state.content.skills.push(skillName)
		},
		deleteSkillButton: (state, action) => {
			const currentSkillId = action.payload
			const deletedSkillButton = state.content.skills.filter(
				(skill) => skill.id !== currentSkillId,
			)
			state.content.skills = deletedSkillButton
		},
		addExample: (state) => {
			state.control = true
		},
		clearExample: (state) => {
			state.control = false
		},
		deleteContent: (state) => {
			state.content.header = {}
			state.content.experience = []
			state.content.education = []
			state.content.skills = []
		},
	},
})

export const builderActions = builderSlice.actions
export default builderSlice
