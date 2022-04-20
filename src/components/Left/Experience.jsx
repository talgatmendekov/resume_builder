import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'
import { setToLocaleStorage } from '../../utils/helpers/general'

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
		setToLocaleStorage('@resumeData', experienceContentInputs.inputValue)
		experienceContentInputs.onClear()
	}

	const { t } = useTranslation()

	return (
		<StyledExperienceSection>
			<h2>{t('left.experience.title')}</h2>
			<form onSubmit={submitExperienceDataHandler}>
				<h4>{t('left.experience.company1.place')}</h4>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.name')}</label>
				</div>

				<div>
					<input
						name='company'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.company}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.address')}</label>
				</div>

				<div>
					<input
						name='address'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.address}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.position')}</label>
				</div>

				<div>
					<input
						name='position'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.position}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.startDate')}</label>
				</div>

				<div>
					<input
						name='startDate'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.startDate}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.endDate')}</label>
				</div>

				<div>
					<input
						name='endDate'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.endDate}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.description')}</label>
				</div>

				<div>
					<input
						name='description1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description1}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.description')}</label>
				</div>

				<div>
					<input
						name='description2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description2}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.description')}</label>
				</div>

				<div>
					<input
						name='description3'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.description3}
					/>
				</div>

				<hr />

				<Button>{t('left.experience.addBtn')}</Button>
			</form>
		</StyledExperienceSection>
	)
}

const StyledExperienceSection = styled.div`
	form {
		display: flex;
		flex-direction: column;
		.formControl-root {
			position: relative;
		}
		label {
			transform: translate(14px, -1px) scale(0.75);
			color: rgba(0, 0, 0, 0.54);
			font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
			font-size: 1rem;
			top: 0;
			left: 0;
			position: absolute;
		}
		input {
			margin: 1rem;
			padding: 1rem;
		}
	}
`
export default Experience
