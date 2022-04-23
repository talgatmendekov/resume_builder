/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { templatedata, templatedataRu } from '../../../utils/fake_data'

const EducationPart = () => {
	const { content, control } = useSelector((state) => state.builder)
	const { resumes, resumeId } = useSelector((state) => state.save)


	const { t, i18n } = useTranslation()

	let contentUse = content

	if (control && i18n.resolvedLanguage === 'ru') {
		contentUse = templatedataRu
	} else if (control && i18n.resolvedLanguage === 'en') {
		contentUse = templatedata
	} else if (resumeId) {
		const currentItem = resumes.find((el) => el.id === resumeId)
		contentUse = currentItem.content
	}

	let educationContent = contentUse.education.map((education, index) => {
		return (
			<div key={index}>
				<p>
					<strong>{education.institution}</strong> {education.address}
				</p>
				<p>
					{education.major} {education.graduationYear}
				</p>
				<ul>
					<li>{education.additionalInfo}</li>
				</ul>
			</div>
		)
	})

	let title
	if (contentUse.education.length === 0) {
		title = ''
	} else {
		title = (
			<h3>
				<strong>{t('left.education.title')}</strong>
			</h3>
		)
	}
	return (
		<StyledEducationPart>
			{title}
			{educationContent}
		</StyledEducationPart>
	)
}

const StyledEducationPart = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 94px;
	h3 {
		strong {
			text-transform: uppercase;
		}
	}
`
export default EducationPart
