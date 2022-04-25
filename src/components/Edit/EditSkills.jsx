import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SKILLSECTION } from '../../utils/helpers/constants'
import { MdClose } from 'react-icons/md'
import { StyledInput, StyledAddButton, StyledLabel, StyledForm, StyledSkills, Div, DivItem } from '../Left/styles'
import { saveActions } from '../../store/saveSlice'
import Button from '../UI/Button'

const SkillsContainer = ({ onClick, value, showSelect }) => {
	const valueToLower = value.toLowerCase()
	return (
		value.trim() !== '' &&
		showSelect && (
			<ContainerSkills>
				{SKILLSECTION.filter((skill) =>
					skill.toLowerCase().includes(valueToLower),
				).map((skill) => (
					<SkillsItem onClick={() => onClick(skill)} key={skill}>
						{skill}
					</SkillsItem>
				))}
			</ContainerSkills>
		)
	)
}

const EditSkills = () => {
	const dispatch = useDispatch()
	const { skills } = useSelector((state) => state.builder.content)
	const {resumes, resumeId} = useSelector(state => state.save)
	const [showEdit, setShowEdit] = useState(false)
	const [idSkills, setIdSkills] = useState(null)
	const [skillValue, setSkillValue] = useState('')
	const [showSelect, setShowSelect] = useState(true)

	
	const { t } = useTranslation()

	const currentResume = resumes.find(resume => resume.id === resumeId) || resumes[resumes.length -1]

	const skillsInputChangeHandler = (e) => {
		setSkillValue(e.target.value)
	}

	const addSkillHandler = (e) => {
		e.preventDefault()
		if (skillValue.trim().length > 0) {
			dispatch(saveActions.editSkills({
				skillValue: skillValue,
				id: idSkills,
				resumeId,
				

			}))
		}
		setShowSelect(true)
		setSkillValue('')
	}

	const deleteSkillButtonHandler = (id) => {
		dispatch(saveActions.deleteSkillButton({
			id: id,
			resumeId,
		}))
	}
	const skillOption = skills.map((skill) => (
		<li key={skill.id}>
			<span>{skill.skillValue}</span>
			<MdClose
				cursor='pointer'
				fontSize={'20px'}
				className='deleteIcon'
				onClick={() => deleteSkillButtonHandler(skill.id)}
			/>
		</li>
	))
	const selectSkillsHandler = (skill) => {
		setSkillValue(skill)
		setShowSelect(false)
	};

	const hideModalHandler = (e) => {
		e.preventDefault()
		dispatch(saveActions.hideModal())
	}

	const editSkillsHandler = (id) => {
		setShowEdit(true)
		setIdSkills(id)
		dispatch(saveActions.resumeId(currentResume.id))
		
	}
	return (
		<StyledSkills>
			<h2>{t('left.skills.title')}</h2>
			{!showEdit && (
				<Div>
					{currentResume.content.skills.map(el => (
						<DivItem key={el.id}>
							<StyledAddButton className='editBtn' onClick={() => editSkillsHandler(el.id)}>{el.skillValue}</StyledAddButton>
						</DivItem>
					))}
				</Div>
			)}
			<StyledForm onSubmit={addSkillHandler}>
				<div className='formControl-root'>
					<StyledLabel>{t('left.skills.section')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='skill'
						type='text'
						onChange={skillsInputChangeHandler}
						value={skillValue}
						autoComplete='off'
					/>
					<SkillsContainer
						value={skillValue}
						onClick={selectSkillsHandler}
						showSelect={showSelect}
					/>
					<section>
						<ul>{skillOption}</ul>
					</section>
				</div>
				<StyledAddButton>{t('left.editBtn')}</StyledAddButton>
				<StyledAddButton onClick={hideModalHandler}>
				{t('left.logoutBtn')}
				</StyledAddButton>
			</StyledForm>
		</StyledSkills>
	)
}
const ContainerSkills = styled.div`
	width: 70%;
	padding: 1rem;
	background-color: whitesmoke;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	max-height: 300px;
	overflow-y: scroll;
`
const SkillsItem = styled.div`
	width: 90%;
	padding: 0.5rem 1rem;
	font-size: 16px;
	font-weight: 500;
	color: #545480;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	margin-bottom: 5px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
	}
	
`

export default EditSkills
