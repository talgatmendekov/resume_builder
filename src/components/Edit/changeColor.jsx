import React from 'react'
import { COLORS } from '../../utils/helpers/constants'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const ChangeColor = () => {

  const fontColor = useSelector(state => state.builder)
  const dispatch = useDispatch()

  const changeColorHandler = (color) => {
    dispatch(builderActions.changeFontColor(color))
  }
  return (
    <ColorPalette>
    <h2>Choose color</h2>
    {COLORS.map(color => (
    <ColorItem onClick ={() => changeColorHandler(color)}
      isColor = {color === fontColor}
      key={color}
      color = {color}
        />
    ))}
    </ColorPalette>
  )
}

const ColorPalette = styled.div`
width: 120px;
padding: 0.3rem;
background-color: whitesmoke;
border-radius: 4px;
margin-top: 30px;
`

const ColorItem = styled.button`
   border: none;
   width: 50px;
   height: 50px;
   transition: 0.2s;
   background-color: ${(props) => props.color};
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
   `
export default ChangeColor