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
		experience: {
            company1: '',
            address1: '',
            position1: '',
            startDate1: '',
            endDate1: '',
            firstDescription1: '',
			secondDescription1: '',
            company2: '',
            address2: '',
            position2: '',
            startDate2: '',
            endDate2: '',
            firstDescription2: '',
			secondDescription2: '',
        },
		education: {
			institution: '',
			address: '',
			major: '',
			graduationYear: '',
			additionalInfo: '',
		},
		skills: [],
	},
}
const builderSlice = createSlice({
	name: 'builder',
	initialState: initState,
	reducers: {
		addHeaderContent(state, action) {
			state.content.header = action.payload
		},
        addExperienceContent:(state, action) => {
            state.content.experience = action.payload
        },
		addEducationContent: (state, action) => {
			console.log(action, 'dispacth');
			state.content.education = action.payload
		},
		addSkillsContent: (state, action) => {
			console.log(action.payload, '=>>>skills');
			const skillName = action.payload;
			state.content.skills.push(skillName)
		},
		deleteSkillButton: (state, action) => {
			const currentSkillId = action.payload
			console.log(currentSkillId);
			const deletedSkillButton = state.content.skills.filter(skill => skill.id !==currentSkillId)
			state.content.skills = deletedSkillButton
		}
	},
})

export const builderActions = builderSlice.actions
export default builderSlice
