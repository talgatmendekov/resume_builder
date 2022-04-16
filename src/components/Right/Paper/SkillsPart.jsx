import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SkillsPart = () => {
  const { skills } = useSelector((state) => state.builder.content)

  const skillsContent = skills.map((skill) => (
		<li key={skill.id}>
			{skill.skillValue}
			
		</li>
	))
  return (
    <StyledSkillsPart>
      <div>
        <ul>
          {skillsContent}
        </ul>
      </div>
    </StyledSkillsPart>
  )
}

const StyledSkillsPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 94px;
`
export default SkillsPart