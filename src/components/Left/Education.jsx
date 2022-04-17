import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'

const Education = () => {
	const dispatch = useDispatch()
	const educationContentInputs = useInput()

	useEffect(() => {
		if(!educationContentInputs.inputValue) {
			return
		}
		dispatch(builderActions.addEducationContent(educationContentInputs.inputValue))
	}, [dispatch, educationContentInputs.inputValue]);

	const { t } = useTranslation();

	return (
		<StyledEducationSection>
			<h2>{t('left.education.title')}</h2>
			<form>
				<div className='formControl-root'>
					<label>{t('left.education.institution')}</label>
				</div>

				<div>
					<input
						type='text'
						name='institution'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.education.address')}</label>
				</div>

				<div>
					<input type='text'
						name='address'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.education.major')}</label>
				</div>

				<div>
					<input type='text' 
						name='major'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.education.graduationYear')}</label>
				</div>

				<div>
					<input type='text' 
						name='graduationYear'
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.education.additionalInfo')}</label>
				</div>

				<div>
					<input type='text'
						name='additionalInfo' 
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<Button>{t('left.education.addBtn')}</Button>
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
export default Education
