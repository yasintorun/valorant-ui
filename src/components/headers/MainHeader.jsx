import React from 'react'
import styled from 'styled-components'
const _Header = styled.header`
    background-color: transparent;
    border-bottom: 2px solid #ffffff50;
    height: 50px;
    box-sizing: border-box;
`

const Container = styled.div`
    height: 100%;
    padding: 0px 20px;
`
const ValorantHeaderLogo = styled.img`
width: 20px;
padding: 5px;
border: 2px solid #fff;
`

const SettingButton = styled.button`
    all: unset;
    border: 2px solid #ffffff60;
    border-radius: 50%;
    padding: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content:center;
    &>img: {
        filter: invert(100%);
    }
`

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavBarItem = styled.div`
    height: 100%;
    font-size: 16px;
    margin: 0px 20px;
    letter-spacing: 3px;
`
const PlayButton = styled.button`
    all: unset;
    background-color: #ffffffd1;
    color: black;
    font-weight: 900;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #ffffff;
        cursor: pointer;
    }
`

const MainHeader = () => {
    return (
        <_Header>
            <Container className='d-flex justify-content-between align-items-center w-100'>
                <div>
                    <ValorantHeaderLogo src={require("../../assets/images/valorant_basic_logo.png")} />
                </div>
                <Navbar>
                    <NavBarItem>
                        <a href='#'>ANA SAYFA</a>
                    </NavBarItem>
                    <NavBarItem>
                        <a href='#'>SAVAŞ BİLETİ</a>
                    </NavBarItem>
                    <NavBarItem>
                        <a href='#'>AJANLAR</a>
                    </NavBarItem>
                    <NavBarItem>
                        <PlayButton>OYNA</PlayButton>
                    </NavBarItem>
                    <NavBarItem>
                        <a href='#'>KARİYER</a>
                    </NavBarItem>
                    <NavBarItem>
                        <a href='#'>KOLEKSİYON</a>
                    </NavBarItem>
                    <NavBarItem>
                        <a href='#'>MAĞAZA</a>
                    </NavBarItem>
                </Navbar>
                <div>
                    <SettingButton>
                        <img style={{ filter: "invert(1)" }} width={20} src={require("../../assets/images/settings.png")} />
                    </SettingButton>
                </div>
            </Container>
        </_Header>
    )
}

export default MainHeader