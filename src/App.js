import Nav from 'react-bootstrap/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { TbBrandYoutube } from 'react-icons/tb';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { TbBrandInstagram } from 'react-icons/tb';
import { IoLogoTiktok } from 'react-icons/io5';
import { useState, useEffect } from "react";
import axios from "axios"

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(
                `https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products`
            );
            setProducts(response.data[0]);
        };
        getProducts();
    }, []);

    return (
        <Container>
            <div id="Nav-section">
                <Nav
                    className="justify-content-end"
                >
                    <Nav.Item>
                        <Nav.Link className="Nav-link">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="Nav-link">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="Nav-link">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="Nav-link">Pricing</Nav.Link>
                    </Nav.Item>
                    <Button variant="light" id="Login-button"><strong>Login</strong></Button>
                </Nav>
                <div id="Brand-header-blob">
                    <h2 id="Brand-name">CHILLED GRAPE</h2>
                </div>
            </div>
            <br></br>
            <div id="Hero-space">
                <h1><strong>LOREM IPSUM DOLOR SIT AMET.</strong></h1>
                <Button variant="light" className="Info-button">Read More</Button>
            </div>
            <div id="Info-graphic-section" width="100%">
                <div className="Secondary-info">
                    <h2><strong>LOREM IPSUM DOLOR SIT AMET.</strong></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis.
                        Nibh tellus molestie nunc non.
                    </p>
                    <Button variant="light" className="Info-button">Read More</Button>
                </div>
                <div>
                    <img src={require("./plant.png")} width="50%" />
                </div>
            </div>
            <Row lg={3}>
                {products.map(x => <ProductCard id={x.id} image={x.image} name={x.product_name} price={x.price} />)}
            </Row>
            <h3 id='Load-more-btn'><strong>Load More</strong></h3>
            <Row id="Footer-content">
                <Col md={6}>
                    <div id="Blob-bottom">
                        <h2 id="Bottom-brand-name">CHILLED GRAPE</h2>
                        <p
                            className="Secondary-info"
                            style={
                                {
                                    width: '600px',
                                    height: '132px',
                                    paddingLeft: '75px',
                                    marginTop: '150px',
                                    color: 'white',
                                    position: 'absolute',
                                }
                            }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </Col>
                <Col md={2}>
                    <ul className="About-list">
                        <li>
                            <h6 className="About-header"><strong>Company</strong></h6>
                        </li>
                        <li className="About-links">
                            About
                        </li>
                        <li className="About-links">
                            Careers
                        </li>
                        <li className="About-links">
                            Our Work
                        </li>
                        <li className="About-links">
                            Contact
                        </li>
                    </ul>
                </Col>
                <Col md={2}>
                    <ul className="About-list">
                        <li>
                            <h6 className="About-header"><strong>Products</strong></h6>
                        </li>
                        <li className="About-links">
                            About
                        </li>
                        <li className="About-links">
                            Careers
                        </li>
                        <li className="About-links">
                            Our Work
                        </li>
                        <li className="About-links">
                            Contact
                        </li>
                    </ul>
                </Col>
                <Col md={2}>
                    <h6 className="About-header"><strong>Follow Us</strong></h6>
                    <Row>
                        <Col>
                            <div className="Social-icon-box">
                                <FaTelegramPlane className="Social-icon" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Social-icon-box">
                                <TbBrandTwitter className="Social-icon" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Social-icon-box">
                                <TbBrandYoutube className="Social-icon" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="Social-icon-box">
                                <RiFacebookBoxLine className="Social-icon" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Social-icon-box">
                                <TbBrandInstagram className="Social-icon" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Social-icon-box">
                                <IoLogoTiktok className="Social-icon" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

function ProductCard(props) {
    //const imgHeightStartPos = props.image.search('\\d+x');
    //const imgHeight = props.image.substring(imgHeightStartPos, imgHeightStartPos + 3);
    //const imgWidthStartPos = props.image.search('x\\d') + 1;
    //const imgWidth = props.image.substring(imgWidthStartPos, imgWidthStartPos + 3);
    //const scale = 32.0 / Math.max(imgWidth, imgHeight);
    //const scaledHeight = Math.round(imgHeight * scale, 0);
    //const scaledWidth = Math.round(imgWidth * scale, 0);
    //const ratio = Math.min(200 / imgWidth, 200 / imgHeight);
    return (
        <Col className="d-flex">
            <Card className="flex-fill mb-5" key={props.id} className="Product-card">
                <Card.Img variant="top" src={props.image} className="Product-image" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default App;
