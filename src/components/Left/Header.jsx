import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useInput } from '../../hooks/useInput'
import { useTranslation } from 'react-i18next'
import { setToLocaleStorage } from '../../utils/helpers/general'

const Header = () => {
	const dispatch = useDispatch();
	const headerContentInputs = useInput();
	const { t } = useTranslation();
	
	const submitHeaderContentHandler = (e) => {
		e.preventDefault()
		dispatch(builderActions.addHeaderContent(headerContentInputs.inputValue))
		setToLocaleStorage('@resumeData', headerContentInputs.inputValue)
	}


	return (
		<StyledHeader>
			<h2>{t('left.header.title')}</h2>
			<form onSubmit={submitHeaderContentHandler}>
				<div className='formControl-root'>
					<label>{t('left.header.fullName')}</label>
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
					<label>{t('left.header.address')}</label>
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
					<label>{t('left.header.city')}</label>
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
					<label>{t('left.header.state')}</label>
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
					<label>{t('left.header.zip')}</label>
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
					<label>{t('left.header.phone')}</label>
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
					<label>{t('left.header.email')}</label>
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
				<div>
					<input
						name='summary'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur = {headerContentInputs.onBlur}

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
