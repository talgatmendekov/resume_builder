import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'
import Button from './UI/Button'
import { useNavigate } from 'react-router-dom'

const Finalize = () => {

  const navigate = useNavigate()

  const navigateHandler = () => {
      navigate('/basic/header')
  }
  return (
    <>
		<StyledBasic className='left'>
			<div className='headerLeft'>
				<div>
					
						<img src={logo} alt='logo' />
					
				</div>
				<div>
          <Button onClick ={navigateHandler}>Back</Button>
        </div>
			</div>
			<div>
				<div className='topLeft'>
				
				</div>
			</div>
			<hr />
			<div className='formSection'>
			
			</div>
		</StyledBasic>
		</>
  )
}

const StyledBasic = styled.div`
  background-color: #fcdfdf;
	box-shadow: 0 0 0.5cm #7b7d7d;
	width: 490px;
	
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
			color: #ee7a7a;
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
export default Finalize;