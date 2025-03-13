import './Home.css'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

function Home(){
    return(  <div class = "bg">
   <div id = "home"> 
   <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        {/* img1 */}
        <Col className="a">
          <Image src={'img.png'}  roundedCircle
                className="mb-3"
                 />
               <p>Menu</p> 
        </Col>

        {/* img 2 */}
        <Col className="a">
          <Image src={'img.png'}  roundedCircle
                className="mb-3"
                />
               <p>Stores</p> 
        </Col>
        {/* i+mg 3*/}
        <Col className="a">
          <Image src={'img.png'}  roundedCircle
                className="mb-3"
                 />
            Cart
        </Col>
      </Row>
    </Container>

    </div></div>)
}
export default Home;