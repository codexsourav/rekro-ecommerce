"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminWrapper from '../components/AdminWrapper';
import { BiPlus } from 'react-icons/bi';
import styles from '@/app/admin/style.module.css';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import validator from 'validator';
import { toast } from 'react-toastify';
import axios from 'axios';
import Image from 'next/image';
function Products() {
    const [show, setShow] = useState(false);
    const [pageData, setpageData] = useState(null);
    const [actionAdd, setactionAdd] = useState(true);
    const [updateid, setupdateid] = useState('');



    const [loading, setloading] = useState(false);
    const [cltitle, setcltitle] = useState('');
    const [clurl, setclurl] = useState('');
    const ses = useSession();

    const loadData = () => {

        var options = {
            method: 'GET',
            url: '/api/collection',
        };

        axios.request(options).then(function (response) {
            setpageData(response.data);
        }).catch(function (error) {
            setpageData([]);
        });
    }

    const deleteCollection = async (did) => {
        const id = toast.loading("Please wait...")
        try {
            var options = {
                method: 'DELETE',
                url: '/api/collection/' + did,
                headers: {
                    Authorization: ses.data.user.token,
                }
            };
            const response = await axios.request(options);
            if (response.data.delete == true) {
                toast.update(id, { render: "Collection Delete", type: "info", isLoading: false, autoClose: true });
                loadData();
            } else {
                toast.update(id, { render: "Something went wrong", type: "error", isLoading: false, autoClose: true });
            }
        } catch (error) {
            toast.update(id, { render: "Something went wrong", type: "error", isLoading: false, autoClose: true });

        }

    }

    const editCollection = (e) => {
        setactionAdd(false);
        setcltitle(e.title)
        setclurl(e.image);
        setShow(true);
        setupdateid(e._id)
    }

    const addCollection = () => {
        setactionAdd(true);
        setcltitle('')
        setclurl('');
        setShow(true);
    }

    async function sendAddNewCollection() {

        if (validator.isEmpty(cltitle)) {
            toast.error("Enter The Title");
            return false;
        } else if (validator.isEmpty(clurl)) {
            toast.error("Enter The URL");
            return false;
        } else if (!validator.isURL(clurl)) {
            toast.error("Enter Valid URL");
            return false;
        }
        try {
            setloading(true);
            const id = toast.loading("Please wait...")
            let response;
            if (actionAdd) {
                response = await axios.post('/api/collection', {
                    title: cltitle, image: clurl
                }, {
                    headers: {
                        Authorization: ses.data.user.token,
                        'Content-Type': 'application/json',
                    },
                });
            } else {
                response = await axios.put('/api/collection/' + updateid, {
                    title: cltitle, image: clurl
                }, {
                    headers: {
                        Authorization: ses.data.user.token,
                        'Content-Type': 'application/json',
                    },
                });
            }


            if (response.data.add == true || response.data.update == true) {
                toast.update(id, { render: actionAdd ? "New Collection Added" : "Collection Updated", type: "success", isLoading: false, autoClose: true });
                setcltitle("")
                setclurl("");
                setShow(false)
                loadData();
            } else {
                toast.update(id, { render: "Something went wrong", type: "error", isLoading: false, autoClose: true });
            }
            setloading(false);
        } catch (error) {
            setloading(false)
            console.error(error);
            toast.error("Sumthing Want Wrong");
        }
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <>
            <AdminWrapper />
            <Container>
                <h1 style={{ marginTop: 20, textAlign: "center" }} >All Collaction</h1>
                <Row className='mb-5'>

                    {pageData == null ? "Loading...." : pageData.length == 0 ? "NO Data Found" : pageData.map((e, i) => {

                        return <Col xs={12} md={4} style={{ padding: 20 }} key={"index-" + i} >
                            <Card  >
                                <Image variant="top" src={e.image} width={150} height={150} style={{ objectFit: 'contain', width: '100%' }} />
                                <Card.Body className='mt-2'>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Button variant="success" onClick={() => editCollection(e)} >Edit</Button>
                                    <Button variant="danger ms-2" onClick={() => deleteCollection(e._id)}>Delete</Button>
                                </Card.Body>
                                <a href={"/admin/products/" + e.title} className='btn btn-primary'>View Products</a>
                            </Card>
                        </Col>
                    })}


                </Row>
            </Container>
            <Button variant="primary" size="lg" className={styles.flotingbtn} onClick={addCollection}>
                <BiPlus size={30} />
            </Button>



            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={cltitle} onChange={(e) => setcltitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" value={clurl} onChange={(e) => setclurl(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendAddNewCollection} disabled={loading}>{loading ? "Loading..." : actionAdd ? "Add Collection" : "Update Collection"}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Products