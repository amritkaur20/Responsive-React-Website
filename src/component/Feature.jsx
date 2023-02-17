import React from "react";
import styled from "styled-components";
import Design from "../img/pp3.jpeg";


const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px) {
  flex-direction: column;
  padding: 30px 20px;
}

`
const Left = styled.div`
margin-top: 19px;
width: 50%;
@media only screen and (max-width: 480px) {
  display: none;
}

`;

const Image = styled.img`
  width: 70%;
  margin-left:14vh
  
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
 
`;

const Title = styled.span`
  font-size: 60px;
  font-family:Chalkduster;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 22px;
  font-style: italic;
  color: black;
  margin-top: 30px;
  font-family:Chalkduster;
`;

const Desc = styled.p`
  font-size: 19px;
  color: grey;
  margin-top: 30px;
  font-family:Comic Sans MS;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  font-size: 20px;
  border-radius: 13px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
    return (
      <Container>
        <Left>
          <Image src={Design} />
        </Left>
        <Right>
          <Title>
            <b>Good</b> design
            <br />
            <b>Good</b> business
          </Title>
          <SubTitle>We know that good design means good business.</SubTitle>
          <Desc>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic. 
            We care your business and guarantee you to achieve marketing goals.
          </Desc>
  
          <Button>Learn More</Button>
        </Right>
    
      </Container>
    );
  };
  
  export default Feature;