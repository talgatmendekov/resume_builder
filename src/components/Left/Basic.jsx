import React from 'react'
import logo from '../../assets/logo.svg'
import Button from '../UI/Button'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

const Basic = () => {


	return (
		<StyledBasic>
			<div className='headerLeft'>
				<div>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<div>
					<Button className='btn'>Example</Button>
				</div>
			</div>
			<div>
				<div className='topLeft'>
					<Link to={'header'}>
						<Button className='nav'>Header</Button>
					</Link>
					<Link to={'experience'}>
						{' '}
						<Button className='nav'>Experience</Button>
					</Link>
					<Link to={'education'}>
						<Button className='nav'>Education</Button>
					</Link>
					<Link to={'skills'}>
						<Button className='nav'>Skills</Button>
					</Link>
				</div>
			</div>
			<hr />
			<div className='formSection'>
				<Outlet />
			</div>
		</StyledBasic>
	)
}

const StyledBasic = styled.div`
	background-color: #fff;
	box-shadow: 0 0 0.5cm #7b7d7d;
	.headerLeft {
		display: flex;
		justify-content: space-between;
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
			font-size: 10px;
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