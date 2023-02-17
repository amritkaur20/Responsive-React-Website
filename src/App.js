import styled,{ css } from "styled-components"
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Price from "./component/Price";
import Service from "./component/Service";


const Container = styled.div`

overflow:hidden;
position: relative;
`
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 50% 100%);
background-color:turquoise ;
`
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(76% 0, 100% 0%, 100% 100%, 54% 98%);
  background-color: pink;
`;






const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
    <Container>
    <Navbar/>
    <Intro/>
    <IntoShape />
    </Container>
    <Container>
    <Feature/>
    </Container>
    <Container>
    <Service/>
    {!smallScreen && <ServiceShape />}
    </Container>
    <Container>
    <Price/>
    </Container>
    <Container>
    <Contact/>
    <Footer/>
    </Container>
    </>
  );
}

export default App;
