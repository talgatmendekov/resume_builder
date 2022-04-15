import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const Education = () => {
	const institutionNameValue = useInput()
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(builderActions.addInstitution(institutionNameValue.inputValue))
	}, [dispatch, institutionNameValue.inputValue]);
	return (
		<StyledEducationSection>
			<h2>Education</h2>
			<form>
				<h4>Company 1</h4>
				<div className='formControl-root'>
					<label for='outlined-basic'>Institution</label>
				</div>

				<div>
					<input type='text' onChange={institutionNameValue.onChange} value={institutionNameValue.inputValue}/>
				</div>

				<div className='formControl-root'>
					<label>City, State, Country</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>Major</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>Graduation Year</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>Additional Info</label>
				</div>

				<div>
					<input type='text' />
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
