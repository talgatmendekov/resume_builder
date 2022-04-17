import React from 'react'
import logo from '../assets/logo.webp'
import thumbn from '../assets/template.png'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Template = () => {

	const { t } = useTranslation()
	return (
		<StyledTemplate>
			<div className='headerLeft'>
				<Link to={'/'}>
					<img src={logo} alt='logo' />
				</Link>
			</div>
			<hr />
			<h2>{t('template.title')}</h2>
			<div className='cards'>
				<div className='templateCard'>
					<img src={thumbn} alt='thumbnail' />
					<Link to={'/basic/header'}><Button>{t('template.basic')}</Button></Link>
					
				</div>
			</div>
		</StyledTemplate>
	)
}

const StyledTemplate = styled.div`
	background-color: #fff;
	width: 25vw;
	box-shadow: 0 0 0.5cm #7b7d7d;
	.headerLeft {
		display: flex;
		justify-content: space-between;
		img {
			width: 120px;
			margin: 15px 0 15px 20px;
		}
	}
    h2{
        margin-left: 15px;
    }
	hr {
		width: 90%;
		border: 0;
		height: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		padding-top: 20px;
	}
    .cards{
        display: flex;
        width: 80%;
        margin: 25px;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .templateCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 170px;
            margin-left: 20px;
        }
    }
`
export default Template
