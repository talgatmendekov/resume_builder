import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const EducationPart = () => {
  // const {institution} = useSelector(state=> state.builder.content.education)
  return (
    <StyledEducationPart>
      education
      <p>
        <strong></strong>
      </p>
      <p></p>
    </StyledEducationPart>
  )
}

const StyledEducationPart = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 94px;
`
export default EducationPart