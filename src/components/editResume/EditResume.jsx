import React, { useState } from 'react'
import EditEducation from '../Edit/EditEducation'
import EditExperience from '../Edit/EditExperience'
import EditHeader from '../Edit/EditHeader'
import EditSkills from '../Edit/EditSkills'
import styled from 'styled-components'
import Button from '../UI/Button'
import { MdEdit } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { saveActions } from '../../store/saveSlice'
import Modal from '../UI/Modal'



const EditResume = () => {
	const { resumes } = useSelector((state) => state.save)
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { modal } = useSelector((state) => state.save)
	const [showEdit, setShowEdit] = useState(null)
	const editHandler = (component) => {
		setShowEdit(component)
		dispatch(saveActions.showModal())
	}

	return (
		<>
		{resumes.length > 0 && (
			<EditSection>
				<h2>{t('left.editResumes')}</h2>
			{modal && <Modal>{showEdit}</Modal>}
			<Button
				onClick={() => editHandler(<EditHeader />)}
				className='editBtn'
			>
				{t('left.editHeader')} <MdEdit />
			</Button>
			<Button
				onClick={() => editHandler(<EditExperience />)}
				className='editBtn'
			>
				{t('left.editExperience')}
				<MdEdit />
			</Button>
			<Button
				onClick={() => editHandler(<EditEducation />)}
				className='editBtn'
			>
				{t('left.editEducation')}
				<MdEdit />
			</Button>
			<Button
				onClick={() => editHandler(<EditSkills />)}
				className='editBtn'
			>
				{t('left.editSkills')}
				<MdEdit />
			</Button>
		</EditSection>
		)}
		
	
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

export default EditResume
