import React from 'react'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel, StyledForm } from './styles'


const Experience = () => {
	const dispatch = useDispatch()
	
	const experienceContentInputs = useInput()

	const submitExperienceDataHandler = (e) => {
		e.preventDefault()
		if (experienceContentInputs.valueIsValid) {
			dispatch(
				builderActions.addExperienceContent(
					experienceContentInputs.inputValue,
				),
			)
		}
		
		experienceContentInputs.onClear()

	}

	const { t } = useTranslation()

	return (
		<>
			<h2>{t('left.experience.title')}</h2>
			<StyledForm onSubmit={submitExperienceDataHandler}>
				
				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.name')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='company'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.company}
					/>
				</div>

				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.address')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='address'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.address}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.position')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='position'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.position}
					/>
				</div>

				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.startDate')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='startDate'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.startDate}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.endDate')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='endDate'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.endDate}
					/>
				</div>

				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.description')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='description1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description1}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.description')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='description2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description2}
					/>
				</div>
				<div className='formControl-root'>
					<StyledLabel>{t('left.experience.company1.description')}</StyledLabel>
				</div>

				<div>
					<StyledInput
						name='description3'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description3}
					/>
				</div>

				<hr />

				<StyledAddButton>{t('left.experience.addBtn')}</StyledAddButton>
			</StyledForm>
		</>
	)
}


export default Experience
