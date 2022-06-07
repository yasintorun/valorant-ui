import React from 'react'
import styled from 'styled-components'

const Special = styled.div`
    width: 80px;
    height: 90px;
    background-color: #858585aa;
    opacity: 0.75;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #adadad;
    }
    
    & p {
        background-color: transparent;
        color: white;
        margin: 0;
        padding: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid gray;
    }
    &:hover p {
        background-color: white;
        color: black;
    }
`

const SpecialIcon = styled.div`
    background: url(${props => props.icon}) no-repeat center center;
    height: 50px;
    background-size: contain;
`
const SpecialCard = ({title, icon}) => {
    return (
        <Special>
            <p>{title}</p>
            <SpecialIcon icon={icon}>
            </SpecialIcon>
        </Special>
    )
}

export default SpecialCard