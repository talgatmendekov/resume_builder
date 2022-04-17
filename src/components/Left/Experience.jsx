import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'

const Experience = () => {
	const dispatch = useDispatch()
	const experienceContentInputs = useInput();

	useEffect(() => {
		if (!experienceContentInputs.inputValue) {
			return
		}
		dispatch(
			builderActions.addExperienceContent(
				experienceContentInputs.inputValue,
			),
		)
	}, [dispatch, experienceContentInputs.inputValue])

	const { t } = useTranslation();

	return (
		<StyledExperienceSection>
			<h2>{t('left.experience.title')}</h2>
			<form>
				<h4>{t('left.experience.company1.place')}</h4>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.name')}</label>
				</div>

				<div>
					<input
						name='company1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.address')}</label>
				</div>

				<div>
					<input
						name='address1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.position')}</label>
				</div>

				<div>
					<input
						name='position1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.startDate')}</label>
				</div>

				<div>
					<input
						name='startDate1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.endDate')}</label>
				</div>

				<div>
					<input
						name='endDate1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company1.description')}</label>
				</div>

				<div>
					<input
						name='firstDescription1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company1.description')}</label>
				</div>

				<div>
					<input
						name='secondDescription1'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<hr />
				<h4>{t('left.experience.company2.place')}</h4>
				<div className='formControl-root'>
					<label>{t('left.experience.company2.name')}</label>
				</div>

				<div>
					<input
						name='company2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company2.address')}</label>
				</div>

				<div>
					<input
						name='address2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company2.position')}</label>
				</div>

				<div>
					<input
						name='position2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company2.startDate')}</label>
				</div>

				<div>
					<input
						name='startDate2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company2.endDate')}</label>
				</div>

				<div>
					<input
						name='endDate2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.experience.company2.description')}</label>
				</div>

				<div>
					<input
						name='firstDescription2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.experience.company2.description')}</label>
				</div>

				<div>
					<input
						name='secondDescription2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
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
