import React from "react";
import styled from 'styled-components'
import ReactDOM from "react-dom";

const BackDrop = (props) => {
    return <StyledBackDrop className={props.className} onClick={props.onClick}></StyledBackDrop>
}

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(
            <BackDrop onClick={props.onClick}/>,
            document.getElementById('backdrop-root'), 
        )}
        {ReactDOM.createPortal(
            <StyledModal>{props.children}</StyledModal>,
            document.getElementById('modal-root')
        )}
        </>
    )
}

const StyledModal = styled.div`
    width: 360px;
	padding: 2rem 0 0 4rem;
	background-color: #56daf1;
    border: 1px solid red;
    box-shadow: 3px 3px 10px rgba(201, 8, 8, 0.5);
    color: #2c2727;   
	position: absolute;
	top: 70%;
	left: 17%;
	transform: translate(-50%, -50%);
	z-index: 1;
	max-height: 400px;
	overflow: scroll;
`
const StyledBackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`

export default Modal;