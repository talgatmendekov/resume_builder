import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useInput } from '../../hooks/useInput'

const Header = () => {
	const dispatch = useDispatch()
	const headerContentInputs = useInput()
	
	useEffect(() => {
		if(!headerContentInputs.inputValue){
			return
		}
		dispatch(
			builderActions.addHeaderContent(headerContentInputs.inputValue)
		)
	}, [dispatch, headerContentInputs.inputValue])

	return (
		<StyledHeader>
			<h2>Header</h2>
			<form>
				<div className='formControl-root'>
					<label>Full Name</label>
				</div>

				<div>
					<input
						name='fullName'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>Address</label>
				</div>

				<div>
					<input
						name='address'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>
				<div className='formControl-root'>
					<label>City</label>
				</div>

				<div>
					<input
						name='city'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>

				<div className='formControl-root'>
					<label>State</label>
				</div>

				<div>
					<input
						name='state'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>
				<div className='formControl-root'>
					<label>Zip Code</label>
				</div>

				<div>
					<input
						name='zipCode'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>

				<div className='formControl-root'>
					<label>Phone</label>
				</div>

				<div>
					<input
						name='phone'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>
				<div className='formControl-root'>
					<label>Email</label>
				</div>

				<div>
					<input
						name='email'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

					/>
				</div>
				<Button>Add</Button>
			</form>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
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
export default Header;
