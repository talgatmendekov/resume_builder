import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ExperiencePart = () => {
  const {company1} = useSelector(state => state.prof)
  console.log(company1)
  return (
    <StyledExperiencePart>
      Experience
      <div>
        <p>
          <strong>{company1}</strong>
        </p>
        <p></p>
        <ul></ul>
        <p>
          <strong></strong>
        </p>
        <p></p>
        <ul></ul>
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