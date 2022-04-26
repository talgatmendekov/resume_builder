import React, { useEffect } from 'react'
import EducationPart from './EducationPart'
import ExperiencePart from './ExperiencePart'
import HeaderPart from './HeaderPart'
import SkillsPart from './SkillsPart'
import { useSelector } from 'react-redux'
import { setToLocaleStorage } from '../../../utils/helpers/general'
import styled, { createGlobalStyle } from 'styled-components'


const Paper = () => {
	const resumeData = useSelector((state) => state.builder.content)
	const {color} = useSelector(state => state.builder)
	const {fontStyle} = useSelector(state => state.builder)
	

	useEffect(() => {
		setToLocaleStorage('@resumeData', resumeData)
	}, [resumeData])

	return (
		<>
		<GlobalStyle color={color} fontStyle={fontStyle}></GlobalStyle>
		<StyledPaper>
		
			<div size='A4' className='page'>
				
				<HeaderPart />
				<ExperiencePart />
				<EducationPart />
				<SkillsPart />
			</div>
			
		</StyledPaper>
		</>
		
		
	)
}

const StyledPaper = styled.div`
	
	
`
const GlobalStyle = createGlobalStyle`
	h1, h2, h3, p {
		color: ${(props) => props.color || '#464746'};
		
	}
	h1, h2, h3, p, strong, i {
		font-family: ${(props) => props.fontStyle || '#464746'};
	}
		
`
export default Paper
