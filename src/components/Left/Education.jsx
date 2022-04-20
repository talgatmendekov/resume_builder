import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton } from './styles'

const Education = () => {
	const dispatch = useDispatch()
	const educationContentInputs = useInput()

	const { t } = useTranslation();

	const submitEducationDataHandler = (e) => {
		e.preventDefault()
		
		dispatch(builderActions.addEducationContent(educationContentInputs.inputValue))
		educationContentInputs.onClear()
	}

	return (
		<StyledEducationSection>
			<h2>{t('left.education.title')}</h2>
			<form onSubmit={submitEducationDataHandler}>
				<div className='formControl-root'>
					<label>{t('left.education.institution')}</label>
				</div>

				<div>
					<StyledInput
						type='text'
						name='institution'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.institution}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.education.address')}</label>
				</div>

				<div>
					<StyledInput type='text'
						name='address'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.address}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.education.major')}</label>
				</div>

				<div>
					<StyledInput type='text' 
						name='major'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.major}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.education.graduationYear')}</label>
				</div>

				<div>
					<StyledInput type='text' 
						name='graduationYear'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.graduationYear}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.education.additionalIfno')}</label>
				</div>

				<div>
					<StyledInput type='text'
						name='additionalInfo' 
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.additionalInfo}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<StyledAddButton>{t('left.education.addBtn')}</StyledAddButton>
			</form>
		</StyledEducationSection>
	)
}

const StyledEducationSection = styled.div`
	form {
		display: flex;
		flex-direction: column;
		.formControl-root {
			position: relative;
		}
		label {
			transform: translate(10px,-8px) scale(0.75);
			color: rgba(0, 0, 0, 0.54);
			font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
			font-size: 1.2rem;
			top: 0;
			left: 0;
			position: absolute;
		}
		
	}
`
export default Education
