import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useInput } from '../../hooks/useInput'
import { useTranslation } from 'react-i18next'
import { StyledInput } from './styles'


const Header = () => {
	const dispatch = useDispatch()
	const headerContentInputs = useInput()
	const { t } = useTranslation()

	const submitHeaderContentHandler = (e) => {
		e.preventDefault()
		dispatch(
			builderActions.addHeaderContent(headerContentInputs.inputValue),
		)
	}

	return (
		<StyledHeader>
			<h2>{t('left.header.title')}</h2>
			<form onSubmit={submitHeaderContentHandler}>
				<div className='formControl-root'>
					<label>{t('left.header.fullName')}</label>
				</div>

				<div>
					<StyledInput
						name='fullName'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.header.address')}</label>
				</div>

				<div>
					<StyledInput
						name='address'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.header.city')}</label>
				</div>

				<div>
					<StyledInput
						name='city'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.header.state')}</label>
				</div>

				<div>
					<StyledInput
						name='state'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.header.zip')}</label>
				</div>

				<div>
					<StyledInput
						name='zipCode'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>

				<div className='formControl-root'>
					<label>{t('left.header.phone')}</label>
				</div>

				<div>
					<StyledInput
						name='phone'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.header.email')}</label>
				</div>

				<div>
					<StyledInput
						name='email'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<div className='formControl-root'>
					<label>{t('left.header.summary')}</label>
				</div>
				<div>
					<textarea
						name='summary'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<Button>{t('left.header.addBtn')}</Button>
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
			transform: translate(10px,-8px) scale(0.75);
			color: rgba(0, 0, 0, 0.54);
			font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
			font-size: 1.2rem;
			top: 0;
			left: 0;
			position: absolute;
		}
		input {
			
		}
		textarea {
			margin: 1rem;
			padding: 1rem;
			width: 70%;
			color: gray;
			background: #f8eded;
			border: 0.5px solid #f0cece;
			outline: none;
			:hover {
				border: 1px solid red;
			}
		}
	}
`
export default Header
