/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/logo.svg'
import Button from '../UI/Button'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const Basic = () => {
	const dispatch = useDispatch()
	const { control } = useSelector((state) => state.builder)

	const { t } = useTranslation()

	const addExampleHandler = () => {
			dispatch(builderActions.addExample())
		
	}

	const clearExampleHandler = () => {
		dispatch(builderActions.clearExample())
	}

	let expData
	if (control) {
		expData = (
			<Button className='btn' onClick={clearExampleHandler}>
				{t('left.basic.removeExample')}
			</Button>
		)
	} else {
		expData = (
			<Button className='btn' onClick={addExampleHandler}>
				{t('left.basic.addExample')}
			</Button>
		)
	}
	return (
		<>
		<StyledBasic>
			<div className='headerLeft'>
				<div>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<div>{expData}</div>
			</div>
			<div>
				<div className='topLeft'>
					<Link to={'header'}>
						<Button className='nav'>
							{t('left.basic.header')}
						</Button>
					</Link>
					<Link to={'experience'}>
						{' '}
						<Button className='nav'>
							{t('left.basic.experience')}
						</Button>
					</Link>
					<Link to={'education'}>
						<Button className='nav'>
							{t('left.basic.education')}
						</Button>
					</Link>
					<Link to={'skills'}>
						<Button className='nav'>
							{t('left.basic.skills')}
						</Button>
					</Link>
				</div>
			</div>
			<hr />
			<div className='formSection'>
				<Outlet />
			</div>
		</StyledBasic>
		</>
		
	)
}

const StyledBasic = styled.div`
	background-color: #fff;
	box-shadow: 0 0 0.5cm #7b7d7d;
	width: 450px;
	.headerLeft {
		display: flex;
		justify-content: space-between;
		div{
			margin-top: 1rem;
		}

		div {
			flex-grow: 2;
			img {
				margin: 0.5rem;
			}
		}
		.btn {
			color: white;
			border: 0;
			height: 30px;
			font-size: 1rem;
			background: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
			box-shadow: 0 3px 5px 2px #f2f3f4;
			margin-top: 15px;
			text-align: center;
			font-weight: 700;
			margin-right: 20px;
			border-radius: 3px;
			
		}
	}
	.topLeft {
		display: flex;
		padding: 1rem;
		text-align: center;
		justify-content: space-evenly;
		.nav{
			font-size: 1.2rem;
			font-weight: 500;
			background: none;
			color: #4d9ee9;
			border: 0;
			:hover{
				background: #a4c2e4;
			}
			
		}
	}

	hr {
		width: 90%;
		border: 0;
		height: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		padding-top: 20px;
	}
	.formSection {
		margin: 25px;
	}
`
export default Basic
