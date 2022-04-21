import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { MdPictureAsPdf } from 'react-icons/md'
import Paper from './Paper/Paper'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ruLangLogo from '../../assets/icons/ru.png'
import enLangLogo from '../../assets/icons/en.png'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { setToLocaleStorage } from '../../utils/helpers/general'

const Right = () => {
	const dispatch = useDispatch()

	const [langLogo, setLangLogo] = useState('')

	const { i18n, t } = useTranslation()

	const changeLangHandler = (e) => {
		if (e.target.value === 'en') {
			setLangLogo('en')
			i18n.changeLanguage('en')
			setToLocaleStorage('lang', 'en')
		} else {
			setLangLogo('ru')
			i18n.changeLanguage('ru')
			setToLocaleStorage('lang', 'ru')
		}
	}

	const deleteContentHandlder = () => {
		localStorage.clear()
		dispatch(builderActions.deleteContent())
	}

	const handleSaveToPDF = (e) => {
		e.preventDefault()
		window.print()
	}
	return (
		<div className='right'>
			<StyledRight className='test'>
				<div className='nav'>
				<ul>
					<li>
						<TiDelete
							color={'#f50857'}
							cursor={'pointer'}
							fontSize={'3.3rem'}
							className='deleteIcon'
							onClick={deleteContentHandlder}
						/>
						<p className='text'>{t('right.deleteIconTitle')}</p>
					</li>
					<li>
						<MdPictureAsPdf
							color={'#4caf50'}
							cursor={'pointer'}
							fontSize={'3rem'}
							className='pdfIcon'
							onClick={handleSaveToPDF}
						/>
						<p className='text'>{t('right.savePDFIconTitle')}</p>
					</li>
					<li>
						<select
							className='lang_select'
							onChange={changeLangHandler}
							value={langLogo}
						>
							<option value='en'>{'Eng'}</option>
							<option value='ru'>{'Рус'}</option>
						</select>

						<img
							src={langLogo === 'ru' ? ruLangLogo : enLangLogo}
							className='lang_icon'
							alt='language icon'
						/>
				
					</li>
				</ul>
				</div>
			</StyledRight>
			<Paper />
		</div>
	)
}

const StyledRight = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	.nav {
		width: 400px;
		height: 90px;
		background: #222337;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 10px;
	}
	ul {
		width: inherit;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	
	}
	li{
		list-style: none;
		translate: 0.5s;
		animation-delay: .3s;
		:hover{
			transform: translateY(5px);
		}
		
	}

	
	p{
		opacity: 0;
		:hover {
			opacity: 1;
			color:whitesmoke;
			font-weight: bold;
		}
	}
	.lang_select {
		outline: none;
		border: none;
		background: #222337;
		border-radius: 5px;
		font-weight: bold;
		color: whitesmoke;

	}
	.lang_icon {
		width: 40px;
		margin-bottom: 1rem;
		background: #222337;
		cursor: pointer;
	}
`
export default Right
