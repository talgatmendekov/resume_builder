import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useInput } from '../../hooks/useInput'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel } from './styles'


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
					<StyledLabel>{t('left.header.fullName')}</StyledLabel>
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
					<StyledLabel>{t('left.header.address')}</StyledLabel>
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
					<StyledLabel>{t('left.header.city')}</StyledLabel>
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
					<StyledLabel>{t('left.header.state')}</StyledLabel>
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
					<StyledLabel>{t('left.header.zip')}</StyledLabel>
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
					<StyledLabel>{t('left.header.phone')}</StyledLabel>
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
					<StyledLabel>{t('left.header.email')}</StyledLabel>
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
				<StyledAddButton>{t('left.header.addBtn')}</StyledAddButton>
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
