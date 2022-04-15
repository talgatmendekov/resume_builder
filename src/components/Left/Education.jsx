import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const Education = () => {
	const dispatch = useDispatch()
	const educationContentInputs = useInput()

	useEffect(() => {
		if(!educationContentInputs.inputValue) {
			return
		}
		dispatch(builderActions.addEducationContent(educationContentInputs.inputValue))
	}, [dispatch, educationContentInputs.inputValue]);

	return (
		<StyledEducationSection>
			<h2>Education</h2>
			<form>
				<div className='formControl-root'>
					<label>Institution</label>
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
					<label>City, State, Country</label>
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
					<label>Major</label>
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
					<label>Graduation Year</label>
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
					<label>Additional Info</label>
				</div>

				<div>
					<input type='text'
						name='additionalInfo' 
						onChange={educationContentInputs.onChange}
						value={educationContentInputs.inputValue.name}
						onBlur={educationContentInputs.onBlur}
					/>
				</div>

				<Button>Add</Button>
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
