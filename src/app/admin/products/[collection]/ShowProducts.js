"use client";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap"
import AdminWrapper from "../../components/AdminWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Rattingstars from "@/Components/Product/Rattingstars";
import styles from '@/app/admin/style.module.css'
import { BiPlus } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
function ShowProducts({ data }) {
    const [deletelist, setdeletelist] = useState([])
    const path = usePathname();
    const ses = useSession()


    const deleteProduct = (e) => {

        var options = {
            method: 'DELETE',
            url: '/api/product/' + e._id,
            headers: {
                Authorization: ses.data.user.token
            }
        };
        const id = toast.loading("Please wait...")

        axios.request(options).then(function (response) {
            if (response.data.delete == true) {
                toast.update(id, { render: "Product Deleted", type: "info", isLoading: false, autoClose: true });
                setdeletelist(prev => [...prev, e._id]);
            } else {
                toast.update(id, { render: "Something went wrong", type: "error", isLoading: false, autoClose: true });
            }
        }).catch(function (error) {
            console.error(error);
            toast.update(id, { render: "Something went wrong", type: "error", isLoading: false, autoClose: true });
        });
    }

    return (
        <div>
            <AdminWrapper />
            <Container>
                <h1 style={{ marginTop: 20, textAlign: "center" }} >Collaction Name</h1>
                <Row className='mb-5'>
                    {data.length == 0 ? "No Product Found" : data.map((e, i) => {
                        return <Col md={6} key={"product-" + i} style={deletelist.includes(e._id) ? { opacity: 0.3 } : null} >
                            <Accordion className="mt-4" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b className="me-3">{e.title} </b> Price: ₹{e.sellprice}.00</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="p-2">
                                            <Col className="text-center">
                                                <Image variant="center" src={e.images[0]} width={150} height={150} style={{ objectFit: 'contain' }} />
                                            </Col>
                                            <Col md={9}>
                                                <h3 className="mt-3">{e.title}</h3>
                                                <p>₹{e.sellprice}.00</p>
                                                <Rattingstars rating={e.stars} />
                                                <p className="mt-2">Sells : {e.sells}</p>
                                                <p className="mt-2">Avalile Stock : {e.stars}</p>
                                                {
                                                    !deletelist.includes(e._id) ? <>
                                                        <a className="btn btn-primary" href={path + "/" + e._id + "/update"} >Edit Product</a>
                                                        <a className="btn btn-success ms-2" href={path + "/" + e._id + "/update"} >Reviews</a>

                                                        <Button variant="danger" className="ms-2" onClick={() => deleteProduct(e)}>Delete</Button>
                                                    </> : null
                                                }
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    })}

                </Row>
            </Container>
            <a href={path + '/add'} size="lg" className={`${styles.flotingbtn} btn btn-primary`}>
                <BiPlus size={30} />
            </a>
        </div>
    )
}
export default ShowProducts