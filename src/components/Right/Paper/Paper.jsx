import React from 'react'
import EducationPart from './EducationPart'
import ExperiencePart from './ExperiencePart'
import HeaderPart from './HeaderPart'
import SkillsPart from './SkillsPart'


const Paper = () => {
	
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