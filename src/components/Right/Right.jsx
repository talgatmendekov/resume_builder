import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { MdPictureAsPdf } from 'react-icons/md'
import Paper from './Paper/Paper'
import {useTranslation} from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ruLangLogo from '../../assets/ru.png'
import enLangLogo from '../../assets/en.png'
import { useDispatch } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { setToLocaleStorage } from '../../utils/helpers/general'

const Right = () => {

  const dispatch = useDispatch()
  
  const [langLogo, setLangLogo] = useState('');

  const { i18n, t } = useTranslation();


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

  	const deleteContentHandlder = () => {
		localStorage.clear();
		dispatch(builderActions.deleteContent())
	  };


  	const handleSaveToPDF = (e) => {
		  e.preventDefault();
		  window.print()
	  }
	return (
		<div className='right'>
			<StyledRight>
				<Link to='#'>
					<TiDelete title={t('right.deleteIconTitle')} className='deleteIcon' onClick={deleteContentHandlder}/>
				</Link>
				<Link to='#' onClick={handleSaveToPDF}>
					<MdPictureAsPdf title={t('right.savePDFIconTitle')} className='pdfIcon' />
				</Link>
				<div className='navbar_lang'>
					<select className='lang_select' onChange={changeLangHandler} value={langLogo}>
						<option value='en'>{'Eng'}</option>
						<option value='ru'>{'Рус'}</option>
					</select>
          <span>
            <img src={langLogo === 'ru' ? ruLangLogo : enLangLogo} className='lang_icon' alt="language icon" />
          </span>
				</div>
			</StyledRight>
			<Paper />
		</div>
	)
}

const StyledRight = styled.div`
	display: flex;
	justify-content: space-evenly;
	.deleteIcon {
		font-size: 3.3rem;
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

	option{
	  font-weight: 500;
	  color: red;
  }
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
