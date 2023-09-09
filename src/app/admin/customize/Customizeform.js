"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import AdminWrapper from "@/app/admin/components/AdminWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import validator from 'validator'
import axios from "axios";
import { useSession } from "next-auth/react";
function Customizeform({ params, data }) {



    const [loading, setLoading] = useState(false);
    const ses = useSession()
    // Create refs for all your input fields
    const heroTitleRef = useRef(null);
    const heroSubTitleRef = useRef(null);
    const heroImageRef = useRef(null);
    const heroLinkRef = useRef(null);
    const heroLinkTitleRef = useRef(null);

    const firstCollectionTitleRef = useRef(null);
    const firstCollectionImageRef = useRef(null);
    const firstCollectionLinkTitleRef = useRef(null);
    const firstCollectionLinkUrlRef = useRef(null);

    const secondCollectionTitleRef = useRef(null);
    const secondCollectionImageRef = useRef(null);
    const secondCollectionLinkTitleRef = useRef(null);
    const secondCollectionLinkUrlRef = useRef(null);

    const thirdCollectionTitleRef = useRef(null);
    const thirdCollectionImageRef = useRef(null);
    const thirdCollectionLinkTitleRef = useRef(null);
    const thirdCollectionLinkUrlRef = useRef(null);

    const bannerTitleRef = useRef(null);
    const bannerSubTitleRef = useRef(null);
    const bannerImageRef = useRef(null);
    const bannerLinkRef = useRef(null);
    const bannerLinkTitleRef = useRef(null);



    const validateHeroSection = () => {
        const heroTitleValue = heroTitleRef.current.value;
        const heroSubTitleValue = heroSubTitleRef.current.value;
        const heroImageValue = heroImageRef.current.value;
        const heroLinkTitleValue = heroLinkTitleRef.current.value;

        if (
            !heroTitleValue ||
            !heroSubTitleValue ||
            !validator.isURL(heroImageValue) || // Validate as URL
            !heroLinkTitleValue
        ) {
            toast.error("Please fill in all Hero section fields with valid URLs.");
            return false;
        }

        return true;
    };

    const validateCollectionSection = (titleRef, imageRef, linkTitleRef, linkUrlRef, sectionName) => {
        const titleValue = titleRef.current.value;
        const imageValue = imageRef.current.value;
        const linkTitleValue = linkTitleRef.current.value;


        if (
            !titleValue ||
            !validator.isURL(imageValue) || // Validate as URL
            !linkTitleValue
        ) {
            toast.error(`Please fill in all ${sectionName} section fields with valid URLs.`);
            return false;
        }

        return true;
    };

    const handleUpdate = () => {
        // Validate Hero Section
        const isHeroValid = validateHeroSection();

        // Validate First Collection Section
        const isFirstCollectionValid = validateCollectionSection(
            firstCollectionTitleRef,
            firstCollectionImageRef,
            firstCollectionLinkTitleRef,
            firstCollectionLinkUrlRef,
            "First Collection"
        );

        // Validate Second Collection Section
        const isSecondCollectionValid = validateCollectionSection(
            secondCollectionTitleRef,
            secondCollectionImageRef,
            secondCollectionLinkTitleRef,
            secondCollectionLinkUrlRef,
            "Second Collection"
        );

        // Validate Third Collection Section
        const isThirdCollectionValid = validateCollectionSection(
            thirdCollectionTitleRef,
            thirdCollectionImageRef,
            thirdCollectionLinkTitleRef,
            thirdCollectionLinkUrlRef,
            "Third Collection"
        );

        // Validate Banner Section
        const isBannerValid = validateCollectionSection(
            bannerTitleRef,
            bannerImageRef,
            bannerLinkTitleRef,
            bannerLinkRef,
            "Banner"
        );

        // Check if all sections are valid
        if (isHeroValid && isFirstCollectionValid && isSecondCollectionValid && isThirdCollectionValid && isBannerValid) {
            // Proceed with your update logic here
            const formdata = {
                heroimg: heroImageRef.current.value,
                herotitle: heroTitleRef.current.value,
                herosubtitle: heroSubTitleRef.current.value,
                herolink: heroLinkRef.current.value,
                herolinktitle: heroLinkTitleRef.current.value,
                firstcollection: {
                    title: firstCollectionTitleRef.current.value,
                    link: firstCollectionLinkUrlRef.current.value,
                    linktitle: firstCollectionLinkTitleRef.current.value,
                    image: firstCollectionImageRef.current.value,
                },
                secendcollection: {
                    title: secondCollectionTitleRef.current.value,
                    link: secondCollectionLinkUrlRef.current.value,
                    linktitle: secondCollectionLinkTitleRef.current.value,
                    image: secondCollectionImageRef.current.value,

                },
                thurdcollection: {
                    title: thirdCollectionTitleRef.current.value,
                    link: thirdCollectionLinkUrlRef.current.value,
                    linktitle: thirdCollectionLinkTitleRef.current.value,
                    image: thirdCollectionImageRef.current.value,
                },
                banner: {
                    image: bannerImageRef.current.value,
                    title: bannerTitleRef.current.value,
                    subtitle: bannerSubTitleRef.current.value,
                    link: bannerLinkRef.current.value,
                    linktitle: bannerLinkTitleRef.current.value
                },
                id: data?._id ?? null
            };



            var options = {
                method: 'PUT',
                url: '/api',
                headers: {
                    Authorization: ses.data.user.token,
                    'Content-Type': 'application/json'
                },
                data: formdata
            };


            setLoading(true);
            axios.request(options)
                .then((response) => {
                    setLoading(false);
                    toast.success("Update successfully!");
                    console.log('PUT request successful:', response.data);
                    // Handle the response as needed
                })
                .catch((error) => {
                    setLoading(false);
                    console.error('PUT request failed:', error);
                    // Handle errors
                });
        }

    };

    useEffect(() => {
        const {
            heroimg,
            herotitle,
            herosubtitle,
            herolink,
            herolinktitle,
            firstcollection,
            secendcollection,
            thurdcollection,
            banner
        } = data;

        heroTitleRef.current.value = herotitle ?? "";
        heroSubTitleRef.current.value = herosubtitle ?? "";
        heroImageRef.current.value = heroimg ?? "";
        heroLinkRef.current.value = herolink ?? "";
        heroLinkTitleRef.current.value = herolinktitle ?? "";

        // Safely access properties using optional chaining
        firstCollectionTitleRef.current.value = firstcollection?.title ?? "";
        firstCollectionImageRef.current.value = firstcollection?.image ?? "";
        firstCollectionLinkTitleRef.current.value = firstcollection?.linktitle ?? "";
        firstCollectionLinkUrlRef.current.value = firstcollection?.link ?? "";

        secondCollectionTitleRef.current.value = secendcollection?.title ?? "";
        secondCollectionImageRef.current.value = secendcollection?.image ?? "";
        secondCollectionLinkTitleRef.current.value = secendcollection?.linktitle ?? "";
        secondCollectionLinkUrlRef.current.value = secendcollection?.link ?? "";

        thirdCollectionTitleRef.current.value = thurdcollection?.title ?? "";
        thirdCollectionImageRef.current.value = thurdcollection?.image ?? "";
        thirdCollectionLinkTitleRef.current.value = thurdcollection?.linktitle ?? "";
        thirdCollectionLinkUrlRef.current.value = thurdcollection?.link ?? "";

        bannerTitleRef.current.value = banner?.title ?? "";
        bannerSubTitleRef.current.value = banner?.subtitle ?? "";
        bannerImageRef.current.value = banner?.image ?? "";
        bannerLinkRef.current.value = banner?.link ?? "";
        bannerLinkTitleRef.current.value = banner?.linktitle ?? "";

    }, []);


    return (
        <div>
            <AdminWrapper />
            <Container>
                <h1 className="mt-4 mb-5 text-center">Set Home Page</h1>

                <Row>
                    <Col md={4}>
                        <Form.Label htmlFor="heroTitle">Hero Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="heroTitle" name="heroTitle" type="text" ref={heroTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="heroSubTitle">Hero SubTitle</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="heroSubTitle" name="heroSubTitle" type="text" ref={heroSubTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="heroImage">Hero Image</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="heroImage" name="heroImage" type="text" ref={heroImageRef} />
                        </InputGroup>

                        <Form.Label htmlFor="heroLink">Hero Link</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="heroLink" name="heroLink" type="text" ref={heroLinkRef} />
                        </InputGroup>

                        <Form.Label htmlFor="heroLinkTitle">Hero Link Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="heroLinkTitle" name="heroLinkTitle" type="text" ref={heroLinkTitleRef} />
                        </InputGroup>

                        <h5 className="mb-4">First Collection</h5>

                        <Form.Label htmlFor="firstCollectionTitle">First Collection Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="firstCollectionTitle" name="firstCollectionTitle" type="text" ref={firstCollectionTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="firstCollectionImage">First Collection Image</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="firstCollectionImage" name="firstCollectionImage" type="text" ref={firstCollectionImageRef} />
                        </InputGroup>

                        <Form.Label htmlFor="firstCollectionLinkTitle">First Collection Link Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="firstCollectionLinkTitle" name="firstCollectionLinkTitle" type="text" ref={firstCollectionLinkTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="firstCollectionLinkUrl">First Collection Link Url</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="firstCollectionLinkUrl" name="firstCollectionLinkUrl" type="text" ref={firstCollectionLinkUrlRef} />
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-4">Second Collection</h5>

                        <Form.Label htmlFor="secondCollectionTitle">Second Collection Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="secondCollectionTitle" name="secondCollectionTitle" type="text" ref={secondCollectionTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="secondCollectionImage">Second Collection Image</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="secondCollectionImage" name="secondCollectionImage" type="text" ref={secondCollectionImageRef} />
                        </InputGroup>

                        <Form.Label htmlFor="secondCollectionLinkTitle">Second Collection Link Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="secondCollectionLinkTitle" name="secondCollectionLinkTitle" type="text" ref={secondCollectionLinkTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="secondCollectionLinkUrl">Second Collection Link Url</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="secondCollectionLinkUrl" name="secondCollectionLinkUrl" type="text" ref={secondCollectionLinkUrlRef} />
                        </InputGroup>

                        <h5 className="mb-4">Third Collection</h5>

                        <Form.Label htmlFor="thirdCollectionTitle">Third Collection Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="thirdCollectionTitle" name="thirdCollectionTitle" type="text" ref={thirdCollectionTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="thirdCollectionImage">Third Collection Image</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="thirdCollectionImage" name="thirdCollectionImage" type="text" ref={thirdCollectionImageRef} />
                        </InputGroup>

                        <Form.Label htmlFor="thirdCollectionLinkTitle">Third Collection Link Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="thirdCollectionLinkTitle" name="thirdCollectionLinkTitle" type="text" ref={thirdCollectionLinkTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="thirdCollectionLinkUrl">Third Collection Link Url</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="thirdCollectionLinkUrl" name="thirdCollectionLinkUrl" type="text" ref={thirdCollectionLinkUrlRef} />
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <Form.Label htmlFor="bannerTitle">Banner Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="bannerTitle" name="bannerTitle" type="text" ref={bannerTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="bannerSubTitle">Banner SubTitle</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="bannerSubTitle" name="bannerSubTitle" type="text" ref={bannerSubTitleRef} />
                        </InputGroup>

                        <Form.Label htmlFor="bannerImage">Banner Image</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="bannerImage" name="bannerImage" type="text" ref={bannerImageRef} />
                        </InputGroup>

                        <Form.Label htmlFor="bannerLink">Banner Link</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="bannerLink" name="bannerLink" type="text" ref={bannerLinkRef} />
                        </InputGroup>

                        <Form.Label htmlFor="bannerLinkTitle">Banner Link Title</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="bannerLinkTitle" name="bannerLinkTitle" type="text" ref={bannerLinkTitleRef} />
                        </InputGroup>
                    </Col>
                </Row>

                <Button variant="primary" size="lg" disabled={loading} className="mt-4 float-start mb-5" onClick={handleUpdate}>
                    {loading ? "Loading.." : "Update Home"}
                </Button>
            </Container>
        </div>
    );
}

export default Customizeform;

