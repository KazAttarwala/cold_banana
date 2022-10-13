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
import { AiOutlineFacebook } from 'react-icons/ai';
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
                <h2 className="Brand-name"><strong>CHILLED GRAPE</strong></h2>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    id="Navbar"
                >
                    <Nav.Item>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav.Item>
                    <Button className="Login-button" variant="primary">Login</Button>
                </Nav>
            </div>
            <br></br>
            <div id="Hero-space">
                <h1><strong>LOREM IPSUM DOLOR SIT AMET.</strong></h1>
                <Button className="Info-button" variant="primary">Read More</Button>
            </div>
            <div id="Info-graphic-section" width="100%">
                <div id="Secondary-info">
                    <h2 className="Header"><strong>LOREM IPSUM DOLOR SIT AMET.</strong></h2>
                    <p>
                        <strong>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis.
                            Nibh tellus molestie nunc non.
                        </strong>
                    </p>

                    <Button className="Info-button" variant="primary">Read More</Button>

                </div>
                <div>
                    <img src={require("./plant.png")} width="50%" />

                </div>
            </div>
            <Row lg={3}>
                {products.map(x => <ProductCard id={x.id} image={x.image} name={x.product_name} price={x.price} />)}
            </Row>
            <h3>Load More</h3>
            <Row>
                <Col>
                    <h3>CHILLED GRAPE</h3>
                    <p>Lorem ipsum</p>
                </Col>
                <Col>
                    <ul>
                        <li>
                            <h6>Company</h6>
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Our Work
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>
                            <h6>Products</h6>
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Our Work
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h6>Follow Us</h6>
                    <Row>
                        <Col><FaTelegramPlane /></Col>
                        <Col><TbBrandTwitter /></Col>
                        <Col><TbBrandYoutube /></Col>
                    </Row>
                    <Row>
                        <Col><AiOutlineFacebook /></Col>
                        <Col><TbBrandInstagram /></Col>
                        <Col><IoLogoTiktok /></Col>
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
