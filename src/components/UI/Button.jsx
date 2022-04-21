import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton id={props.id} onClick={props.onClick} className={props.className}>{props.children}</StyledButton>
  )
}

const StyledButton = styled.button`
    padding: 0.25rem 1rem;
    cursor: pointer;
    background-color: #F50057;
    color: #fff;
    border: 1px solid #F50057;
    :hover{
        background-color:#AC0057;
    }
`
export default Button