import React, { useState } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { builderActions } from '../../store/builderSlice'
import deleteIcon from '../../assets/close.png'
import { useTranslation } from 'react-i18next'
import { setToLocaleStorage } from '../../utils/helpers/general'

const Skills = () => {
	const dispatch = useDispatch()
	const { skills } = useSelector((state) => state.builder.content)
	const [skillValue, setSkillValue] = useState('')

	const { t } = useTranslation();

	const skillsInputChangeHandler = (e) => {
		setSkillValue(e.target.value)
	}

	const addSkillHandler = (e) => {
		e.preventDefault()
		if(skillValue.trim().length > 0) {
			dispatch(
				builderActions.addSkillsContent({
					skillValue,
					id: skillValue,
				}),
			)
		}
		setToLocaleStorage('@resumeData', {skillValue, id: skillValue})
		setSkillValue('')
	};

	const deleteSkillButtonHandler = (id) => {
            dispatch(builderActions.deleteSkillButton(id))
	}
	const skillOption = skills.map((skill) => (
		<li key={skill.id}>
			<span>{skill.skillValue}</span>
			<img onClick={()=>deleteSkillButtonHandler(skill.id)} src={deleteIcon} alt='delete icon' />
		</li>
	))
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
					/>
					<section>
						<ul>{skillOption}</ul>
					</section>
				</div>

				<Button>{t('left.skills.addBtn')}</Button>
			</form>
		</StyledSkills>
	)
}

const StyledSkills = styled.div`
	form {
		display: flex;
		flex-direction: column;
		.formControl-root {
			position: relative;
		}
		label {
			transform: translate(14px, -1px) scale(0.75);
			color: rgba(0, 0, 0, 0.54);
			font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
			font-size: 1rem;
			top: 0;
			left: 0;
			position: absolute;
		}
		input {
			margin: 1rem;
			padding: 1rem;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			li {
				display: flex;
				margin: 0.5rem;
				justify-content: space-between;
				align-items: center;
				width: 100px;
				height: 30px;
				color: rgb(243, 239, 239);
				opacity: 1;
				padding: 0.5rem;
				font-size: 14px;
				max-width: 100%;
				font-weight: 500;
				border-radius: 22px;
				background-color: #FE615F;
				word-break: break-all;
				:hover{
					img{
						display: block;
					}
				}
			}
			img {
				width: 1rem;
				display: none;
			
			}
		}
	}
`
export default Skills
