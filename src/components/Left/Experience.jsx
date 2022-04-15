import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const Experience = () => {
	const dispatch = useDispatch()
	const experienceContentInputs = useInput()

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

	return (
		<StyledExperienceSection>
			<h2>Professional Experience</h2>
			<form>
				<h4>Company 1</h4>
				<div className='formControl-root'>
					<label>Company</label>
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
					<label>City, State, Country</label>
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
					<label>Position</label>
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
					<label>Start Date</label>
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
					<label>End Date</label>
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
					<label>Description</label>
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
					<label>Description</label>
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
				<h4>Company 2</h4>
				<div className='formControl-root'>
					<label>Company</label>
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
					<label>City, State, Country</label>
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
					<label>Position</label>
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
					<label>Start Date</label>
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
					<label>End Date</label>
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
					<label>Description</label>
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
					<label>Description</label>
				</div>

				<div>
					<input
						name='secondDescription2'
						type='text'
						onChange={experienceContentInputs.onChange}
						value={experienceContentInputs.inputValue.name}
					/>
				</div>
				<Button>Add</Button>
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
