import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel } from './styles'

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
					<StyledLabel>{t('left.education.institution')}</StyledLabel>
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
					<StyledLabel>{t('left.education.address')}</StyledLabel>
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
					<StyledLabel>{t('left.education.major')}</StyledLabel>
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
					<StyledLabel>{t('left.education.graduationYear')}</StyledLabel>
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
					<StyledLabel>{t('left.education.additionalIfno')}</StyledLabel>
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
	
	}
`
export default Education
