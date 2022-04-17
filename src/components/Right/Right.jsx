import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { MdPictureAsPdf } from 'react-icons/md'
import Paper from './Paper/Paper'
import {useTranslation} from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ruLangLogo from '../../assets/ru.png'
import enLangLogo from '../../assets/en.png'

const Right = () => {
  const [langLogo, setLangLogo] = useState('');

  const { i18n, t } = useTranslation();

  const setToLocaleStorage = (key, value) => localStorage.setItem(key, value)

  const changeLangHandler = (e) => {
    if(e.target.value === 'en') {
      setLangLogo('en')
      i18n.changeLanguage('en')
      setToLocaleStorage('lang', 'en')
    } else {
      setLangLogo('ru')
      i18n.changeLanguage('ru')
      setToLocaleStorage('lang', 'ru')
    }
  }


  	const handleSaveToPDF = (e) => {
		  e.preventDefault();
		  window.print()
	  }
	return (
		<div className='right'>
			<StyledRight>
				<Link to='#'>
					<TiDelete title={t('right.deleteIconTitle')} className='deleteIcon' />
				</Link>
				<Link to='#' onClick={handleSaveToPDF}>
					<MdPictureAsPdf title={t('right.savePDFIconTitle')} className='pdfIcon' />
				</Link>
				<div className='navbar_lang'>
					<select className='lang_select' onChange={changeLangHandler} value={langLogo}>
						<option value='ru'>{'Русский'}</option>
						<option value='en'>{'English'}</option>
					</select>
          <span>
            <img src={langLogo === 'en' ? enLangLogo : ruLangLogo} className='lang_icon' alt="language icon" />
          </span>
				</div>
			</StyledRight>
			<Paper />
		</div>
	)
}

const StyledRight = styled.div`
	display: flex;
	flex-direction: column;
	.deleteIcon {
		font-size: 3rem;
		color: #e91e63;
		margin: 10px;
	}
	.pdfIcon {
		font-size: 3rem;
		color: #4caf50;
		margin: 10px;
	}
  .navbar_lang {
    display: flex;
    align-items: center;
  }
	.lang_select {
		outline: none;
		border: none;
		padding: 5px;
		background: none;
		font-size: 16px;
	}
  .lang_icon{
    width: 40px;
  }
`
export default Right
