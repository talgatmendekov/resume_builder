import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'
import Button from './UI/Button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { saveActions } from '../store/saveSlice'
import EditResume from './editResume/EditResume'


const Finalize = () => {
	const dispatch = useDispatch()
	const resumeContent = useSelector((state) => state.builder)
	const { resumes } = useSelector((state) => state.save)

	const navigate = useNavigate()

	const { t } = useTranslation()

	const navigateHandler = () => {
		navigate('/basic/header')
	}

	const saveResumeHandler = () => {
		dispatch(
			saveActions.saveResume({
				...resumeContent,
				id: Date.now().toString(),
			}),
		)
	}
	const selectResumeHandler = (id) => {
		dispatch(saveActions.resumeId(id))
	}
	return (
		<>
			<StyledBasic className='left'>
				<div className='headerLeft'>
					<div>
						<img src={logo} alt='logo' />
					</div>
					<div>
						<Button onClick={navigateHandler}>
							{t('left.back')}
						</Button>
					</div>
				</div>
				<div>
					<div className='topLeft'>
						<Button onClick={saveResumeHandler}>
							{t('left.saveResume')}
						</Button>
					</div>
				</div>
				<hr />
				<div className='formSection'>
					<EditResume />
				</div>
				{resumes.length > 0 && (
					<EditSection>
						<h2>{t('left.savedResumes')}</h2>
						{resumes.map((resume) => (
							<ResumeStyled
								onClick={() => selectResumeHandler(resume.id)}
								key={resume.id}
							>
								{resume.content.header.fullName}
							</ResumeStyled>
						))}
					</EditSection>
				)}
			</StyledBasic>
			
		</>
	)
}

const EditSection = styled.div`
	margin-top: 20px;
	width: 90%;
	height: 100%;
	padding: 1rem;
	background-color: rgba(228, 212, 212, 0.3);
	box-shadow: rgb(0 0 0 / 30%) 5px 5px 50px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	.editBtn {
		width: 100%;
		margin-bottom: 1rem;
		padding: 0.6rem 1rem;
		background-color: rgb(255, 255, 255);
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
		color: rgb(25, 20, 51);
		box-shadow: rgb(0 0 0 / 30%) 2px 2px 10px;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s ease 0s;
		border: none;
		display: flex;
		justify-content: space-between;
		:hover {
			background-color: #940e0e;
			color: white;
		}
	}
`
const ResumeStyled = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	padding: 0.6rem 1rem;
	background-color: rgb(255, 255, 255);
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	color: rgb(25, 20, 51);
	box-shadow: rgb(0 0 0 / 30%) 2px 2px 10px;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease 0s;
	border: none;
	display: flex;
	justify-content: space-between;
	:hover {
		background-color: #940e0e;
		color: white;
	}
`
const StyledBasic = styled.div`
  background-color: #f5ecec;
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
	}}
`
export default Finalize
