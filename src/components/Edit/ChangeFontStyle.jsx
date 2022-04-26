import React from 'react'
import { FONT_STYLES } from '../../utils/helpers/constants'
import styled from 'styled-components'

import { builderActions } from '../../store/builderSlice'
import { useDispatch } from 'react-redux'

const ChangeFontStyle = () => {
	const dispatch = useDispatch()

	const changeFontStyleHandler = (e) => {
		dispatch(builderActions.changeFontStyle(e.target.value))
	}
	return (
		<div>
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
		
		</div>
	)
}

const Select = styled.select``
const Option = styled.option `

`
export default ChangeFontStyle
