import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { useTranslation } from 'react-i18next'
import { StyledInput, StyledAddButton, StyledLabel, StyledForm, Div, DivItem } from '../Left/styles'
import styled from 'styled-components'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { saveActions } from '../../store/saveSlice'
import Button from '../UI/Button'

const EditHeader = () => {
	const dispatch = useDispatch()
	const {resumes, resumeId} = useSelector(state => state.save)
	const [showEdit, setShowEdit] = useState(false)
	const [idHeader, setIdHeader] = useState(null)
	const [phoneValue, setPhoneValue] = useState()

	const headerContentInputs = useInput()
	const { t } = useTranslation()


	const currentResume = resumes.find(resume => resume.id === resumeId) || resumes[resumes.length -1]

	const submitHeaderContentHandler = (e) => {
		e.preventDefault()
		dispatch(saveActions.editHeader({
			...headerContentInputs.inputValue,
			id: idHeader,
			resumeId: resumeId
		}))
		headerContentInputs.onClear()
	};

	const hideModalHandler = (e) => {
		e.preventDefault()
		dispatch(saveActions.hideModal())
	};

	const editHeaderHandler = (id) => {
		setShowEdit(true)
		setIdHeader(id)
		dispatch(saveActions.resumeId(currentResume.id))
	}
	

	return (
		<>
			<h2>{t('left.header.title')}</h2>
			{!showEdit && (
				<Div>
				<DivItem>
					<StyledAddButton onClick={() => editHeaderHandler(currentResume.id)}>Изменить контент</StyledAddButton>
				</DivItem>
			</Div>
			)}
			{showEdit && (
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
				<StyledAddButton>{t('left.editBtn')}</StyledAddButton>
				<StyledAddButton onClick={hideModalHandler}>{t('left.logoutBtn')}</StyledAddButton>
			</StyledForm>
			)}
			
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
export default EditHeader
