import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px){
  width: 100%;
  }
`

const Container = styled.div`
width: 1300px;
display:flex;
justify-content:space-between;
align-items:center;
padding: 15px 0;
@media only screen and (max-width: 768px){
  width: 100%;
  padding: 10px;
  }
`
const Links = styled.div`
display:flex;
align-items:center;
gap:50px;

`
const Logo = styled.img`
height: 50px;
`
const List = styled.ul`
list-style:none;
display:flex;
gap:20px;
@media only screen and (max-width: 768px){
  display: none;
  }
`
const ListItem = styled.li`

`
const Icons = styled.div`
display:flex;
align-items:center;
gap:50px;
`
const Icon = styled.img`
width: 20px;
cursor:pointer;
`
const Button = styled.button`
width:100px;
padding: 10px;
background-color: #da4ea2;
color:white;
cursor:pointer;
border-radius: 60px;
border: none;
cursor:pointer;
`
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
