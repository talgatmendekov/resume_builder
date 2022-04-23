import styled from 'styled-components'
import 'react-phone-number-input/style.css'

export const StyledInput = styled.input`
	margin-bottom: 1rem;
	margin-top: 1rem;
	padding: 1rem;
	width: 70%;
	color: gray;
	background: #f8eded;
	border: 0.5px solid #f0cece;
	outline: none;
	:hover {
		border: 1px solid #cfafaf;
		box-shadow: 3px 3px 10px rgba(134, 132, 132, 0.5);
	}
`
export const StyledAddButton = styled.button`
	font-size: 1.2rem;
	border-radius: 5px;
	width: 78%;
	padding: 0.3rem;
	background-color: #58add4;
	border: none;
	color: #5c5c85;
	font-weight: bold;
	text-transform: uppercase;
	box-shadow: 3px 3px 10px rgba(134, 132, 132, 0.5);
	transition: 0.25s;
	:hover {
		background-color: #5c5c85;
		color: white;
	}
	:active {
		box-shadow: 0 0 0;
	}
`
export const StyledLabel = styled.label`
	transform: translate(10px, -8px) scale(0.75);
	color: rgba(0, 0, 0, 0.54);
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-size: 1.2rem;
	top: 0;
	left: 0;
	position: absolute;
`
export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	.formControl-root {
		position: relative;
	}
	.PhoneInput {
			margin-bottom: 1rem;
			margin-top: 1rem;
			padding: 1rem;
			width: 70%;
			color: gray;
			background: #f8eded;
			border: 0.5px solid #f0cece;
			outline: none;
			:hover {
				border: 1px solid #cfafaf;
				box-shadow: 3px 3px 10px rgba(134, 132, 132, 0.5);
			}
			:focus{
				background-color: #df8888;
				outline: none;
			}
	}
`
export const StyledSkills = styled.div`
	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		gap: 5px;
		width: 100%;
		padding: 0;
		li {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 6px;
			height: 30px;
			color: rgb(243, 239, 239);
			opacity: 1;
			padding: 0.5rem 1rem;
			font-size: 14px;
			max-width: 100%;
			font-weight: 500;
			border-radius: 22px;
			background-color: #fe615f;
			word-break: break-all;
			:hover .deleteIcon {
				opacity: 1;
			}
		}
		.deleteIcon {
			opacity: 0;
		}
	}
`
