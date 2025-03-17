import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function Home() {
    return (
        <div className="bg">
            <div id="home">
                <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
                    <Row>
                        {/* img1 */}
                        <Col className="a">
                            <Image src={'img.png'} roundedCircle className="mb-3" />
                            <p>Menu</p>
                        </Col>

                        {/* img 2 */}
                        <Col className="a">
                            <Image src={'img.png'} roundedCircle className="mb-3" />
                            <p><FormattedMessage id="Store" /></p>
                        </Col>

                        {/* img3 */}
                        <Col className="a">
                            <Image src={'img.png'} roundedCircle className="mb-3" />
                            <p><FormattedMessage id="Cart" /></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;
