import React from 'react'
import { COLORS } from '../../utils/helpers/constants'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { builderActions } from '../../store/builderSlice'

const ChangeColor = () => {
	const fontColor = useSelector((state) => state.builder.color)
	const dispatch = useDispatch()

	const changeFontColorHandler = (color) => {
		dispatch(builderActions.changeFontColor(color))
	}
	return (
		<ColorPalette>
			<h2>Select color</h2>
			{COLORS.map((color) => (
				<ColorPick
					onClick={() => changeFontColorHandler(color)}
					isColor={color === fontColor}
					key={color}
					color={color}
				/>
			))}
		</ColorPalette>
	)
}

const ColorPalette = styled.div`
	width: 30%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: #dfdbdbab;
`

const ColorPick = styled.button`
	width: 3rem;
	height: 3rem;
	border: none;
	background-color: ${(props) => props.color};
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`
export default ChangeColor
