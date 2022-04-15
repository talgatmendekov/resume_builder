import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import EducationPart from './EducationPart'
import ExperiencePart from './ExperiencePart'
import HeaderPart from './HeaderPart'
import SkillsPart from './SkillsPart'

const Paper = () => {
	const localData = useSelector((state) => state.builder)

  useEffect(() => {
		localStorage.setItem('@resumeData', JSON.stringify(localData))
	}, [localData])
  return (
    <div>
       <div size='A4' className='page'>
        <HeaderPart/>
        <ExperiencePart/>
        <EducationPart/>
        <SkillsPart/>
    </div>
    </div>
   
  )
}

export default Paper