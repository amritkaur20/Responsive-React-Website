import React from "react"
import styled from "styled-components"


const Container = styled.div`
height:50px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display:flex;
justify-content:space-between;
align-item:center;
`
const Left = styled.div`
width:60%;
display:flex;
align-item:center;
justify-content:space-between;
`
const Logo = styled.h1`
font-weight:bold;
text-decoration:underline turquoise ;
font-family:Chalkduster;
`
const Menu = styled.ul`
display:flex;
list-style:none;
@media only screen and (max-width: 480px) {
    display: none;
  }
`
const MenuList = styled.li`
margin-right:30px;
font-size:21px;
color: grey;
font-weight:bolder;
font-family:Comic Sans MS;
cursor:pointer;
`
const Button = styled.button`
border:3px solid black;
margin: 16px 8px 21px ;
padding: 8px 16px 6px 13px;
background-color:white;
color: black ;
font-weight:bolder;
border-radius:20px;
cursor:pointer;
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left><Logo>Agency</Logo>
                    <Menu>
                        <MenuList>Home</MenuList>
                        <MenuList>Features</MenuList>
                        <MenuList>Services</MenuList>
                        <MenuList>Pricing</MenuList>
                        <MenuList>Contact</MenuList>
                    </Menu>
                </Left>
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    )
}
export default Navbar