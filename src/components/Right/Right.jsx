import React from 'react'
import {TiDelete} from 'react-icons/ti';
import {MdPictureAsPdf} from 'react-icons/md'
import Paper from './Paper/Paper';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Right = () => {
  return (
    <div className='right'>
        <StyledRight>
            <Link to="#">
                <TiDelete title = 'Delete All Data' className = 'deleteIcon'/>
            </Link>
            <Link to="#">
                <MdPictureAsPdf title='Save to PDF' className='pdfIcon'/>
            </Link>
        </StyledRight>
        <Paper/>
    </div>
  )
}

const StyledRight = styled.div`
display: flex;
flex-direction: column;
.deleteIcon{
  font-size: 3rem;
  color: #e91e63;
  margin: 10px;

}
.pdfIcon{
  font-size: 3rem;
  color: #4caf50;
  margin: 10px;
}
`
export default Right