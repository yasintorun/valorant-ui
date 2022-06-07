import React from 'react'
import styled from 'styled-components'
import Q from '../assets/images/chamber/q.png'
import C from '../assets/images/chamber/c.png'
import E from '../assets/images/chamber/e.png'
import X from '../assets/images/chamber/x.png'
import Class from '../assets/images/classes/SentinelClassSymbol.png'
import SpecialCard from '../components/SpecialCard'


const Root = styled.div `
    width: 95%;
    height: 100%;
`

const Container = styled.div `
    display: flex;
    justify-content: flex-end;
`

const HeroBody = styled.div `
    
`

const SpecialList = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    grid-gap: 0.1rem;
`


const HeroName = styled.h1 `
    font-size: 4em;
    color: #edebad;
`

const CharacterListPage = () => {
  return (
    <Root>
        <Container>
            <HeroBody>
                <p>GÖZCÜ</p>
                <HeroName>CHAMBER</HeroName>
                <SpecialList>
                    <SpecialCard title={"INFO"} icon={Class}/>
                    <SpecialCard title={"C"} icon={C}/>
                    <SpecialCard title={"Q"} icon={Q}/>
                    <SpecialCard title={"E"} icon={E}/>
                    <SpecialCard title={"X"} icon={X}/>
                </SpecialList>
            </HeroBody>
        </Container>
    </Root>
  )
}

export default CharacterListPage