/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { templatedata, templatedataRu } from '../../../utils/fake_data'

const HeaderPart = () => {
	const { content, control } = useSelector((state) => state.builder)
	const { resumes, resumeId } = useSelector((state) => state.save)

	const { i18n } = useTranslation()

	let contentUse = content

	if (control && i18n.resolvedLanguage === 'ru') {
		contentUse = templatedataRu
	} else if (control && i18n.resolvedLanguage === 'en') {
		contentUse = templatedata
	} else if (resumes.length > 0) {
		const currentItem =
			resumes[resumes.length - 1] ||
			resumes.find((el) => el.id === resumeId)
		contentUse = currentItem.content
	}

	let divider
	if (Object.keys(contentUse.header).length > 0) {
		divider = <hr />
	} else {
		divider = ''
	}
	return (
		<StyledHeaderPart>
			<div className='contentHeader'>
				<h1>{contentUse.header.fullName}</h1>
				<p>
					{contentUse.header.address}
					<br />
					{contentUse.header.city} {contentUse.header.state}{' '}
					{contentUse.header.zipCode}
					<br />
					{contentUse.header.phone}
					<br />
					{contentUse.header.email}
				</p>
				<br />
				<i>{contentUse.header.summary}</i>
				{divider}
			</div>
		</StyledHeaderPart>
	)
}

const StyledHeaderPart = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	align-items: center;
	.contentHeader {
		width: 80%;
	}
	h1 {
		text-transform: uppercase;
	}
`
export default HeaderPart
