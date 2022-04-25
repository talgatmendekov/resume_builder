import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel, StyledForm, Div, DivItem } from '../Left/styles'
import { saveActions } from '../../store/saveSlice'
import Button from '../UI/Button'


const EditEducation = () => {
	const dispatch = useDispatch()
	const {resumes, resumeId} = useSelector(state => state.save)
	const [showEdit, setShowEdit] = useState(false)
	const [idEducation, setIdEducation] = useState(null)
	const educationContentInputs = useInput()
	const { t } = useTranslation()

	const currentResume = resumes.find(resume => resume.id === resumeId) ||resumes[resumes.length -1]


	const submitEducationDataHandler = (e) => {
		e.preventDefault()

		dispatch(
			saveActions.editEducation({
				...educationContentInputs.inputValue,
				id: idEducation,
				resumeId,
			})
		)
		educationContentInputs.onClear()
	}

	const hideModalHandler = (e) => {
		e.preventDefault()
		dispatch(saveActions.hideModal())
	}
	const editEducationHandler = (id) => {
		setShowEdit(true)
		setIdEducation(id)
		dispatch(saveActions.resumeId(currentResume.id))
	}
	return (
		<>
			<h2>{t('left.education.title')}</h2>
			{!showEdit && (
				<Div>
					{currentResume.content.education.map(el => (
						<DivItem key={el.id}>
							<Button onClick={()=> editEducationHandler(el.id)}>Изменить {el.institution}</Button>
						</DivItem>
					))}
				</Div>
			)}
			{showEdit && (
				<StyledForm onSubmit={submitEducationDataHandler}>
				<div className='formControl-root'>
					<StyledLabel>{t('left.education.institution')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='text'
						name='institution'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.institution || ''}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<StyledLabel>{t('left.education.address')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='text'
						name='address'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.address || ""}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>{t('left.education.major')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='text'
						name='major'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.major || ''}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<StyledLabel>
						{t('left.education.graduationYear')}
					</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='text'
						name='graduationYear'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.graduationYear || ""}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>
						{t('left.education.additionalIfno')}
					</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='text'
						name='additionalInfo'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.additionalInfo || ''}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<StyledAddButton>{t('left.editBtn')}</StyledAddButton>
				<StyledAddButton onClick={hideModalHandler}>
				{t('left.logoutBtn')}
				</StyledAddButton>
			</StyledForm>
			)}
			
		</>
	)
}


export default EditEducation
