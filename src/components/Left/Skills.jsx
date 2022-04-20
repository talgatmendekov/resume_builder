import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import { useTranslation } from 'react-i18next'
import { SKILLSECTION } from '../../utils/helpers/constants'
import { MdClose } from 'react-icons/md'

const SkillsContainer = ({ onClick, value, showSelect }) => {
	console.log(value)
	console.log(showSelect)
	const valueToLower = value.toLowerCase()
	return (
		value.trim() !== '' &&
		showSelect && (
			<ContainerSkills>
				{SKILLSECTION.filter((skill) =>
					skill.toLowerCase().includes(valueToLower),
				).map((skill) => (
					<SkillsItem onClick={() => onClick(skill)} key={skill}>
						{skill}
					</SkillsItem>
				))}
			</ContainerSkills>
		)
	)
}

const Skills = () => {
	const dispatch = useDispatch()
	const test = useSelector((state) => state.builder.content.skills)
	const [showSelect, setShowSelect] = useState(true)
	console.log(test, 'test')
	const { skills } = useSelector((state) => state.builder.content)
	const [skillValue, setSkillValue] = useState('')

	const { t } = useTranslation()

	const skillsInputChangeHandler = (e) => {
		setSkillValue(e.target.value)
	}

	const addSkillHandler = (e) => {
		e.preventDefault()
		if (skillValue.trim().length > 0) {
			dispatch(
				builderActions.addSkillsContent({
					skillValue,
					id: new Date().toString(),
				}),
			)
		}
		setShowSelect(true)
		setSkillValue('')
	}

	const deleteSkillButtonHandler = (id) => {
		dispatch(builderActions.deleteSkillButton(id))
	}
	const skillOption = skills.map((skill) => (
		<li key={skill.id}>
			<span>{skill.skillValue}</span>
			<MdClose
				cursor='pointer'
				fontSize={'20px'}
				className='deleteIcon'
				onClick={() => deleteSkillButtonHandler(skill.id)}
			/>
		</li>
	))
	const selectSkillsHandler = (skill) => {
		setSkillValue(skill)
		setShowSelect(false)
	}

	return (
		<StyledSkills>
			<h2>{t('left.skills.title')}</h2>
			<form onSubmit={addSkillHandler}>
				<div className='formControl-root'>
					<label>{t('left.skills.section')}</label>
				</div>

				<div>
					<input
						name='skill'
						type='text'
						onChange={skillsInputChangeHandler}
						value={skillValue}
						autoComplete='off'
					/>
					<SkillsContainer
						value={skillValue}
						onClick={selectSkillsHandler}
						showSelect={showSelect}
					/>
					<section>
						<ul>{skillOption}</ul>
					</section>
				</div>
				<Button className='addBtn'>{t('left.skills.addBtn')}</Button>
			</form>
		</StyledSkills>
	)
}
const ContainerSkills = styled.div`
	width: 70%;
	padding: 1rem;
	background-color: whitesmoke;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	max-height: 300px;
	overflow-y: scroll;
`
const SkillsItem = styled.div`
	width: 90%;
	padding: 0.5rem 1rem;
	font-size: 16px;
	font-weight: 500;
	color: #545480;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	margin-bottom: 5px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
	}
`

const StyledSkills = styled.div`
	form {
		display: flex;
		flex-direction: column;
		.formControl-root {
			position: relative;
		}
		label {
			transform: translate(10px, -8px) scale(0.75);
			color: rgba(0, 0, 0, 0.54);
			font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
			font-size: 1rem;
			margin-bottom: 3px;
		}
		input {
			padding: 1rem;
			padding: 1rem;
			width: 70%;
			color: gray;
			background: #f8eded;
			border: 0.5px solid #f0cece;
			outline: none;
			:hover {
				border: 1px solid red;
			}
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			gap: 5px;
			width: 100%;
			padding: 0;
			li {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 6px;
				height: 30px;
				color: rgb(243, 239, 239);
				opacity: 1;
				padding: 0.5rem 1rem;
				font-size: 14px;
				max-width: 100%;
				font-weight: 500;
				border-radius: 22px;
				background-color: #fe615f;
				word-break: break-all;
				:hover .deleteIcon {
					opacity: 1;
				}
			}
			.deleteIcon {
				opacity: 0;
			}
		}
		.addBtn {
			font-size: 1.2rem;
			border-radius: 3px;
			width: 80%;
			padding: 0.5 1rem;
			background-color: beige;
			border: none;
			color: #5c5c85;
			font-weight: bold;
			text-transform: uppercase;
			box-shadow: 3px 3px 10px rgba(134, 132, 132, 0.5);
			transition: 0.2s;
			:hover{
				background-color: #5c5c85;
				color: white;
			}
			:active{
				box-shadow: 0 0 0 ;
			}
		}
	}
`
export default Skills
