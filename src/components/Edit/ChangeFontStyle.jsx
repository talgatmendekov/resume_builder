import React from 'react'
import { FONT_STYLES } from '../../utils/helpers/constants'
import styled from 'styled-components'

import { builderActions } from '../../store/builderSlice'
import { useDispatch} from 'react-redux'

const ChangeFontStyle = () => {
	const dispatch = useDispatch()

	const changeFontStyleHandler = (e) => {
		dispatch(builderActions.changeFontStyle(e.target.value))
	}
	return (
		<Container>
			<p>Font Style</p>
			<Select onChange={changeFontStyleHandler}>
				{FONT_STYLES.map((style) => (
					<Option
						key={style}
						value = {style}
						
					>
						{style}
					</Option>
				))}
			</Select>
		
		</Container>
	)
}

const Container = styled.div`
	p {
		font-size: 2rem;
		color: #5e0e1b;
		font-weight: 600;
	}

`
const Select = styled.select`
width: 200px;
height:3rem;
font-size: 1.3rem;
padding: 0.5rem;
color: #fcfcfc;
background: #5e031b;
word-break: break-all;
`
const Option = styled.option `
	background: #830d2df8;
`
export default ChangeFontStyle
