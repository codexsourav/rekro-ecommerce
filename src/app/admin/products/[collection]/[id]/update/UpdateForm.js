"use client";
import { Badge, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import AdminWrapper from "@/app/admin/components/AdminWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic";
import validator from 'validator';
const Editor = dynamic(() => import("@/app/admin/components/Editor"), { ssr: false });
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

function ProductUpdate({ params, data }) {


    const ses = useSession();
    const [loading, setloading] = useState(false);
    const [content, setContent] = useState();
    const [sizes, setSize] = useState([]);
    const [colors, setcolor] = useState([]);
    const [images, setimages] = useState([]);
    const [featured, setfeatured] = useState(false);
    const title = useRef("");
    const sortdesc = useRef("");
    const price = useRef("");
    const sellprice = useRef("");
    const discount = useRef("");
    const stock = useRef("");
    const color = useRef("");
    const size = useRef("");
    const url = useRef("");

    useEffect(() => {
        title.current.value = data.title;
        price.current.value = data.price;
        sellprice.current.value = data.sellprice;
        discount.current.value = data.discount;
        setContent(data.desc);
        setSize(data.size);
        setcolor(data.color);
        setimages(data.images);
        stock.current.value = data.stock;
        sortdesc.current.value = data.sortdesc;
        setfeatured(data.featured);
    }, []);



    const addSize = (val) => {
        if (val != "") {
            setSize(prev => [...prev, val.toUpperCase()]);
            size.current.value = "";
        }
    }
    const addColor = (val) => {
        if (val != "") {
            setcolor(prev => [...prev, val]);
        }

    }
    const addimages = (val) => {
        if (val != "" && validator.isURL(val)) {
            setimages(prev => [...prev, val])
            url.current.value = "";
        } else {
            toast.warn("Invalid Image URL.");
        }
    }


    // Validation function
    const validateFields = () => {
        if (!title.current.value.trim()) {
            toast.warn("Please enter a title.");
            return false;
        }

        if (!sortdesc.current.value.trim()) {
            toast.warn("Please enter a sort description.");
            return false;
        }

        const parsedPrice = parseFloat(price.current.value);
        if (isNaN(parsedPrice) || parsedPrice < 0) {
            toast.warn("Invalid price. Please enter a valid number.");
            return false;
        }
        if (content.trim().length < 150) {
            toast.warn("Description must have at least 150 characters.");
            return false;
        }
        const parsedSellPrice = parseFloat(sellprice.current.value);
        if (isNaN(parsedSellPrice) || parsedSellPrice < 0) {
            toast.warn("Invalid sell price. Please enter a valid number.");
            return false;
        }

        const parsedDiscount = parseFloat(discount.current.value);
        if (isNaN(parsedDiscount) || parsedDiscount < 0) {
            toast.warn("Invalid discount. Please enter a valid number.");
            return false;
        }

        const parsedStock = parseInt(stock.current.value);
        if (isNaN(parsedStock) || parsedStock < 0) {
            toast.warn("Invalid stock. Please enter a valid integer.");
            return false;
        }

        if (images.length < 2) {
            toast.warn("Please select at least 2 images.");
            return false;
        }

        // Validation passed
        return true;
    };

    const SendAddRequest = () => {
        // Validation
        if (!validateFields()) {
            // Validation failed, do not proceed with the request
            return;
        }

        // Request payload
        const requestData = {
            title: title.current.value,
            price: price.current.value,
            sellprice: sellprice.current.value,
            discount: discount.current.value,
            images: images,
            size: sizes,
            color: colors,
            desc: content,
            productcollection: data.collection,
            stock: stock.current.value,
            sortdesc: sortdesc.current.value,
            featured: featured,
        };

        // Axios request configuration
        const axiosConfig = {
            method: 'PUT',
            url: '/api/product/' + data._id,
            headers: {
                Authorization: ses.data?.user?.token,
                'Content-Type': 'application/json',
            },
            data: requestData,
        };

        // Make the request
        setloading(true);
        Axios.request(axiosConfig)
            .then(function (response) {
                setloading(false);

                if (response.data.add === true) {
                    toast.success("Product Update successfully!");
                } else {
                    toast.error("An error occurred. Please try again.");
                }
            })
            .catch(function (error) {
                setloading(false);

                if (error.response) {
                    const errorMessage = error.response.data.error;
                    toast.error(errorMessage);
                } else if (error.request) {
                    // The request was made, but no response was received from the server.
                    toast.error("No response from the server. Please try again later.");
                } else {
                    // Something happened in setting up the request that triggered an error.
                    toast.error("An error occurred. Please try again.");
                }
            });
    };



    return (
        <div>
            <AdminWrapper />
            <Container>
                <h1 className="mt-4 mb-5 text-center" >Update Product</h1>

                <Row>
                    <Col md={6}>
                        <Form.Label >Your Product Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="title" type="text" ref={title} />
                        </InputGroup>

                        <Form.Label >Product Sort Descripton</Form.Label>
                        <InputGroup className="mb-3">
                            <textarea className="form-control" name="sortdesc" ref={sortdesc} ></textarea>
                        </InputGroup>

                        <Form.Label >Your Price</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control ref={price} name="price" type="number" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <Form.Label >Sell Price</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control ref={sellprice} name="sellprice" type="number" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <Form.Label >Product Discount (%)</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control ref={discount} name="discount" type="number" />
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>

                        <Form.Label >Product Long Description</Form.Label>
                        <InputGroup className="mb-3 w-100">
                            <Editor data={data.desc} update={setContent} />
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <Form.Label >Set As Featured</Form.Label>
                        <Form.Check
                            type="switch"
                            label="Set As Featured Product"
                            checked={featured}
                            onChange={() => setfeatured(!featured)}
                            className="mb-3"
                        />
                        <Form.Label >Available Stock</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control ref={stock} name="stock" placeholder="Stock Number.." type="number" />
                        </InputGroup>

                        <Form.Label >Product Size</Form.Label>


                        {
                            sizes.map((e, i) => {
                                return <Badge bg="secondary" className="ms-2" key={"size-" + i} onClick={() => {
                                    sizes.splice(i, 1);
                                    setSize([...sizes])
                                }}>{e}</Badge>
                            })
                        }
                        <InputGroup className="mb-3">
                            <Form.Control ref={size} name="size" placeholder="EX: S,M,L" />
                            <Button variant="outline-secondary" onClick={() => addSize(size.current.value)} >
                                ADD SIZE
                            </Button>
                        </InputGroup>

                        <div className="d-flex flex-wrap">
                            <Form.Label >Product Colors</Form.Label>
                            {
                                colors.map((e, i) => {
                                    return <div className="ms-2" onClick={() => {
                                        colors.splice(i, 1);
                                        setcolor([...colors])
                                    }}
                                        style={{ backgroundColor: e, width: 20, height: 20 }} key={"color-" + i} > </div>
                                })
                            }

                        </div>

                        <InputGroup className="mb-3">
                            <Form.Control ref={color} type="color" name="color" />
                            <Button variant="outline-secondary" onClick={() => addColor(color.current.value)} >
                                ADD COLOR
                            </Button>
                        </InputGroup>

                        <Form.Label >Product Images</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control ref={url} placeholder="url" name="url" />
                            <Button variant="outline-secondary" onClick={() => addimages(url.current?.value)} >
                                ADD IMAGE
                            </Button>
                        </InputGroup>
                        <div className="d-flex flex-wrap gap-2 justify-content-start ">
                            {images.map((e, i) => {
                                return <Image src={e} key={"image-" + i} width={80} height={80} style={{ objectFit: "cover" }} alt={'image-' + i} onClick={() => {
                                    images.splice(i, 1);
                                    setimages([...images])
                                }} />
                            })}
                        </div>
                    </Col>
                </Row>
                <Button variant="primary" size="lg" disabled={loading} className="mt-4 float-start mb-5" onClick={SendAddRequest}>{loading ? "Loading.." : "Update PRODUCT"}</Button>
            </Container>
        </div>
    )
}
export default ProductUpdate