"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminWrapper from './components/AdminWrapper';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Admin() {
    return (
        <>
            <AdminWrapper />
            <Container>
                <h1 style={{ marginTop: 20, textAlign: "center" }} >All Collaction</h1>
                <Row>
                    <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col> <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col> <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col> <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col> <Col xs={12} md={4} style={{ padding: 20 }} >
                        <Card  >
                            <Card.Img variant="top" src="/images/bag.png" width={150} height={150} style={{ objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">View Products</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Admin;