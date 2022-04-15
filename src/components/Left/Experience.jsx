import React, { useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { profActions } from '../../store/profSlice'

const Experience = () => {
	const dispatch = useDispatch()
	const companyInput = useInput();
	const addressInput = useInput();
	const positionInput = useInput();
	const startDateInput = useInput();
	const endDateInput = useInput();
	const description1Input = useInput();
	const description2Input = useInput();
	
	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addAdress1(addressInput.inputValue))
	}, [dispatch, addressInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addPosition1(positionInput.inputValue))
	}, [dispatch, positionInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

	useEffect(() => {
		dispatch(profActions.addCompany1(companyInput.inputValue))
	}, [dispatch, companyInput.inputValue]);

  return (
    <StyledExperienceSection>
        <h2>Professional Experience</h2>
        <form>
            <h4>Company 1</h4>
            <div className='formControl-root'>
					<label for='outlined-basic'>Company</label>
				</div>

				<div>
					<input type='text' onChange={companyInput.onChange} value={companyInput.inputValue}/>
				</div>

				<div className='formControl-root'>
					<label>City, State, Country</label>
				</div>
        
				<div>
					<input type='text' onChange={addressInput.onChange} value={addressInput.inputValue} />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>Position</label>
				</div>

				<div>
					<input type='text' onChange={positionInput.onChange} value={positionInput.inputValue}/>
				</div>

				<div className='formControl-root'>
					<label>Start Date</label>
				</div>

				<div>
					<input type='text' onChange={startDateInput.onChange} value={startDateInput.inputValue}/>
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>End Date</label>
				</div>

				<div>
					<input type='text' onChange={endDateInput.onChange} value={endDateInput.inputValue}/>
				</div>

				<div className='formControl-root'>
					<label>Description</label>
				</div>

				<div>
					<input type='text' onChange={description1Input.onChange} value={description1Input.inputValue} />
				</div>
				<div className='formControl-root'>
					<label>Description</label>
				</div>

				<div>
					<input type='text' onChange={description2Input.onChange} value={description2Input.inputValue}/>
				</div>
            <hr />
            <h4>Company 2</h4>
            <div className='formControl-root'>
					<label for='outlined-basic'>Company</label>
				</div>

				<div>
					<input type='text'  value={companyInput.onChange}/>
				</div>

				<div className='formControl-root'>
					<label>City, State, Country</label>
				</div>
        
				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>Position</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>Start Date</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label for='outlined-basic'>End Date</label>
				</div>

				<div>
					<input type='text' />
				</div>

				<div className='formControl-root'>
					<label>Description</label>
				</div>

				<div>
					<input type='text' />
				</div>
				<div className='formControl-root'>
					<label>Description</label>
				</div>

				<div>
					<input type='text' />
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