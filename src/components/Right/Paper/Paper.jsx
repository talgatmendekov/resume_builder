import React, { useEffect } from 'react'
import EducationPart from './EducationPart'
import ExperiencePart from './ExperiencePart'
import HeaderPart from './HeaderPart'
import SkillsPart from './SkillsPart'
import { useSelector } from 'react-redux'
import { setToLocaleStorage } from '../../../utils/helpers/general'

const Paper = () => {
	const resumeData = useSelector((state) => state.builder.content)

	useEffect(() => {
		setToLocaleStorage('@resumeData', resumeData)
	}, [resumeData])

	return (
		<div>
			<div size='A4' className='page'>
				<HeaderPart />
				<ExperiencePart />
				<EducationPart />
				<SkillsPart />
			</div>
		</div>
	)
}

export default Paper
