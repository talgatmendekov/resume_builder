import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ExperiencePart = () => {
  const {company1, address1, position1, startDate1, 
    endDate1, firstDescription1, secondDescription1} = useSelector(state => state.builder.content.experience);

  const {company2, address2, position2, startDate2, 
    endDate2, firstDescription2, secondDescription2} = useSelector(state => state.builder.content.experience);
  
  return (
    <StyledExperiencePart>
      Experience
      <div>
        <p>
          <strong>{company1}</strong> {' '}
          {address1}
        </p>
        <p>
          {position1} {startDate1} {' '}
          {endDate1}
        </p>
        <ul>
          <li>{firstDescription1}</li>
          <li>{secondDescription1}</li>
        </ul>
        <p>
          <strong>{company2}</strong> {' '}
          {address2}
        </p>
        <p>
          {position2} {startDate2} {' '}
          {endDate2}
        </p>
        <ul>
          <li>{firstDescription2}</li>
          <li>{secondDescription2}</li>
        </ul>
      </div>
    </StyledExperiencePart>
  )
}

const StyledExperiencePart = styled.div`
  display: flex;
  flex-direction:column;
  margin-left: 94px;
`
export default ExperiencePart