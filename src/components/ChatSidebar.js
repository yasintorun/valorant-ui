import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ValoLogo from '../assets/images/valorant_logo.png'

const Root = styled.div`
    position: fixed;
    right: 0;
    top: 50px;
    bottom: 0;
    height: 100%;
`

const ArrowIcon = styled.div`
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    display: none;
    ${Root}:hover:not(.active) & {
        display: block;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    background-color: #2d3540db;
    width: 50px;
    padding: 5px;
    box-shadow: -2px 0px 10px 0px #00000073;
    cursor: pointer;
    transition: width 0.3s ease;
    transition-delay: 1s;
    ${Root}:hover:not(.active) & {
        background-color: #565f6aa6;
    }
    ${Root}.active & {
        width: 250px;
        transition: all 0.3s ease;
        transition-delay: 0s;
    }
`

const TopLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`

const HeroCard = styled.div `
    display: flex;
    align-items: center;
    & h4, & p {
        margin: 0;
    }
    & h4 {
        color: #edebad;
    }

    & p {
        color: #54bf39;
        font-size: 0.85rem;
    }
`

const ChatSidebar = () => {
    const [open, setOpen] = useState(false);

    const handleChangeOpen = (value) => {
        value != open && setOpen(value);
    }
    
    return (
        <Root className={open ? "active" : ""} onClick={() => {handleChangeOpen(true)}} onMouseLeave={() => handleChangeOpen()}>
            <Content>
                <HeroCard>
                    <TopLogo src={ValoLogo} />
                    <div>
                        <h4>I Am Developer</h4>
                        <p>uygun</p>
                    </div>
                </HeroCard>
            </Content>
            <ArrowIcon>
                <i class="fa-solid fa-chevron-left"></i>
            </ArrowIcon>
        </Root>
    )
}

export default ChatSidebar