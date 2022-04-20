import styled from 'styled-components'

export const StyledInput = styled.input`
	margin: 1rem;
	padding: 1rem;
	width: 70%;
	color: gray;
	background: #f8eded;
	border: 0.5px solid #f0cece;
	outline: none;
	:hover {
		border: 1px solid red;
	}
`
export const StyledAddButton = styled.button`
    font-size: 1.2rem;
    border-radius: 3px;
    width: 80%;
    padding: 0.5 1rem;
    background-color: beige;
    border: none;
    color: #5c5c85;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 3px 3px 10px rgba(134, 132, 132, 0.5);
    transition: 0.25s;
    :hover{
        background-color: #5c5c85;
        color: white;
    }
    :active{
        box-shadow: 0 0 0;
    }
`