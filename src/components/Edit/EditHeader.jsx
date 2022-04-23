import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useInput } from '../../hooks/useInput'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel, StyledForm } from './styles'
import styled from 'styled-components'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [phoneValue, setPhoneValue] = useState()
	const headerContentInputs = useInput()
	const { t } = useTranslation()

	const submitHeaderContentHandler = (e) => {
		e.preventDefault()
		dispatch(
			builderActions.addHeaderContent({
				headerContent: headerContentInputs.inputValue,
				phone: phoneValue,
			}),
		)
		navigate('/basic/experience')
	}
	console.log(phoneValue)

	return (
		<>
			<h2>{t('left.header.title')}</h2>
			<StyledForm onSubmit={submitHeaderContentHandler}>
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
					<PhoneInput
						name='phone'
						onChange={setPhoneValue}
						value={phoneValue}
						international
						defaultCountry='KG'
						limitMaxLength={true}
						countries={['RU', 'UA', 'KZ', 'KG']}
					/>
				</div>
				<p></p>
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
					<StyledLabel>{t('left.header.summary')}</StyledLabel>
				</div>
				<div>
					<StyledTextArea
						name='summary'
						type='text'
						onChange={headerContentInputs.onChange}
						value={headerContentInputs.inputValue.name}
						onBlur={headerContentInputs.onBlur}
					/>
				</div>
				<StyledAddButton>{t('left.header.addBtn')}</StyledAddButton>
			</StyledForm>
		</>
	)
}

const StyledTextArea = styled.textarea`
	margin-bottom: 1rem;
	margin-top: 1rem;
	padding: 1rem;
	width: 70%;
	color: gray;
	background: #f8eded;
	border: 0.5px solid #f0cece;
	outline: none;
	:hover {
		border: 1px solid red;
	}
`

export default Header
