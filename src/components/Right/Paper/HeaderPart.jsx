import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderPart = () => {
	const { fullName, address, city, state, zipCode, phone, email } = useSelector(
		(state) => state.builder.content.header
	)
	return (
		<StyledHeaderPart>
			<div className='contentHeader'>
				<h1>{fullName}</h1>
				<p>
					{address}
					<br />
					{city} {state} {' '}{zipCode}
					<br />
					{phone}
					<br />
          {email}
				</p>
          <br />
          <p></p>
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
