import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'

const Skills = () => {
	return (
		<StyledSkills>
			<h2>Additional Skills</h2>
			<form>
				<div className='formControl-root'>
					<label for='outlined-basic'>Full Name</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>Address</label>
				</div>
        
				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>City</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>State</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>Zip Code</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>Phone</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label>Email</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<Button>Add</Button>
			</form>
		</StyledSkills>
	)
}

const StyledSkills = styled.div`
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
export default Skills
