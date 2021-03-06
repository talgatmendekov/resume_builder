import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {  StyledInput, StyledAddButton, StyledLabel, StyledForm, Div, DivItem } from '../Left/styles'
import { saveActions } from '../../store/saveSlice'


const EditExperience = () => {
	const dispatch = useDispatch()
	const { resumes, resumeId } = useSelector((state) => state.save)
	const [showEdit, setShowEdit] = useState(false)
	const [idExperience, setIdExperience] = useState(null)
	const { t } = useTranslation()
	

	const currentResume =
		resumes.find((resume) => resume.id === resumeId) ||
		resumes[resumes.length - 1]

	const experienceContentInputs = useInput()



	

	const submitExperienceDataHandler = (e) => {
		e.preventDefault()
		dispatch(
			saveActions.editExperience({
				...experienceContentInputs.inputValue,
				id: idExperience,	
				resumeId: resumeId,  
			}),
		)

		experienceContentInputs.onClear()
	}

	const hideModalHandler = (e) => {
		e.preventDefault()
		dispatch(saveActions.hideModal())
	}
	
	 
	const editExperienceHandler = (id) => {
		setShowEdit(true)
		setIdExperience(id)
		dispatch(saveActions.resumeId(currentResume.id))
		
	}
	return (
		<>
			<h2>{t('left.experience.title')}</h2>
			{!showEdit && (
				<Div>
					{currentResume.content.experience.map((el) => (
						<DivItem key={el.id}>
							
							<StyledAddButton className='editBtn' onClick={() => editExperienceHandler(el.id)}>Изменить {el.company}</StyledAddButton>
						</DivItem>
					))}
				</Div>
			)}

			{showEdit && (
				<StyledForm onSubmit={submitExperienceDataHandler}>
					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.name')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='company'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={experienceContentInputs.inputValue.company || ''}
						/>
					</div>

					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.address')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='address'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={experienceContentInputs.inputValue.address|| ''}
						/>
					</div>
					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.position')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='position'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={experienceContentInputs.inputValue.position || ''}
						/>
					</div>

					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.startDate')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='startDate'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={experienceContentInputs.inputValue.startDate || ''}
						/>
					</div>
					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.endDate')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='endDate'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={experienceContentInputs.inputValue.endDate || ''}
						/>
					</div>

					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.description')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='description1'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={
								experienceContentInputs.inputValue.description1 || ''
							}
						/>
					</div>
					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.description')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='description2'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={
								experienceContentInputs.inputValue.description2 || ''
							}
						/>
					</div>
					<div className='formControl-root'>
						<StyledLabel>
							{t('left.experience.company1.description')}
						</StyledLabel>
					</div>

					<div>
						<StyledInput
							name='description3'
							type='text'
							onChange={experienceContentInputs.onChange}
							value={
								experienceContentInputs.inputValue.description3 || ''
							}
						/>
					</div>

					<hr />

					<StyledAddButton className='edit'>
						{t('left.editBtn')}
					</StyledAddButton>
					<StyledAddButton onClick={hideModalHandler}>
						{t('left.logoutBtn')}
					</StyledAddButton>
				</StyledForm>
			)}
		</>
	)
}


export default EditExperience
