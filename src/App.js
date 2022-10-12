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

const array =
    [
        {
            "id": 1,
            "product_name": "semper interdum mauris",
            "image": "http://dummyimage.com/281x278.png/5fa2dd/ffffff",
            "price": 86.87,
            "stock_count": 20
        },
        {
            "id": 2,
            "product_name": "suspendisse",
            "image": "http://dummyimage.com/258x344.png/dddddd/000000",
            "price": 4.72,
            "stock_count": 87
        },
        {
            "id": 3,
            "product_name": "cubilia curae donec",
            "image": "http://dummyimage.com/266x300.png/5fa2dd/ffffff",
            "price": 97,
            "stock_count": 79
        },
        {
            "id": 4,
            "product_name": "fusce",
            "image": "http://dummyimage.com/257x325.png/5fa2dd/ffffff",
            "price": 4.26,
            "stock_count": 0
        },
        {
            "id": 5,
            "product_name": "tristique est",
            "image": "http://dummyimage.com/284x343.png/cc0000/ffffff",
            "price": 93.91,
            "stock_count": 39
        },
        {
            "id": 6,
            "product_name": "semper rutrum nulla",
            "image": "http://dummyimage.com/257x292.png/cc0000/ffffff",
            "price": 35.3,
            "stock_count": 6
        },
        {
            "id": 7,
            "product_name": "cubilia curae",
            "image": "http://dummyimage.com/339x287.png/cc0000/ffffff",
            "price": 27.08,
            "stock_count": 19
        },
        {
            "id": 8,
            "product_name": "sagittis nam",
            "image": "http://dummyimage.com/345x306.png/ff4444/ffffff",
            "price": 80.65,
            "stock_count": 38
        },
        {
            "id": 9,
            "product_name": "mauris morbi non",
            "image": "http://dummyimage.com/340x254.png/dddddd/000000",
            "price": 23.04,
            "stock_count": 43
        },
        {
            "id": 10,
            "product_name": "pretium nisl",
            "image": "http://dummyimage.com/324x309.png/cc0000/ffffff",
            "price": 4.42,
            "stock_count": 58
        }
    ]

function App() {
    return (
        <div className="App">
            <h2>CHILLED GRAPE</h2>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
                <Button variant="primary">Login</Button>
            </Nav>
            <section>
                <h1>LOREM IPSUM DOLOR</h1>
                <Button variant="primary">Read More</Button>
            </section>
            <section>
                <h2>LOREM IPSUM</h2>
                <p>lorem psim fjshf fjhsf jshgkjshgks</p>
                <Button variant="primary">Read More</Button>
            </section>
            <Container>
                <Row lg={3}>
                    {array.map(x => <ProductCard id={x.id} image={x.image} name={x.product_name} price={x.price} />)}
                </Row>
            </Container>
            <h3>Load More</h3>
            <Container>
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
        </div >
    );
}

function ProductCard(props) {
    return (
        <Col className="d-flex">
            <Card className="flex-fill" key={props.id}>
                <Card.Img variant="top" src={props.image} />
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
