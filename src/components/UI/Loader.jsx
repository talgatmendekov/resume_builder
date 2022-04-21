
import React from 'react'
import styled, {keyframes} from 'styled-components'

const Loader = () => {
  return (
    <LoadingWrapper>
    <h3>Loading</h3>
    <Dot delay='0s' />
    <Dot delay='.1s' />
    <Dot delay='.2s'/>
  </LoadingWrapper>
  )
}
const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 15px;
  }

  100% { 
    margin-bottom: 0;
  }
`
const LoadingWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h3{
    color: #4e0606;
    font-size: 2rem;
  }
`

const Dot = styled.div`
  background-color: #610606;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`

export default Loader