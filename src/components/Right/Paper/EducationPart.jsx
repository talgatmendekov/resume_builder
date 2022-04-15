import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const EducationPart = () => {
 const {institution, address, major, graduationYear, additionalInfo} = useSelector(state => state.builder.content.education)
  return (
    <StyledEducationPart>
      education
      <p>
        <strong>{institution}</strong> {' '}
          {address}
      </p>
      <p>
        {major} {graduationYear}
      </p>
      <ul>
        <li>{additionalInfo}</li>
      </ul>
    </StyledEducationPart>
  )
}

const StyledEducationPart = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 94px;
`
export default EducationPart