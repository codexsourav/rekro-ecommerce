"use client";
import ProductBox from '@/Components/Product/ProductBox'
import Carousel from 'react-multi-carousel'
import styles from "./styles/slider.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
function ProductSlider({ title, data }) {




    return (
        <>
            <div className="container">
                <div className={styles.titlebox}>
                    <h1 className={styles.title}>{title}</h1>
                    <a href='/shop' className={styles.seeall}>View All</a>
                </div>
            </div>

            <div className={styles.slidecontainer}>


                <Carousel responsive={responsive} itemClass={styles.items} >
                    {
                        data.map((e, i) => <ProductBox key={"slider-" + i} data={e} />)
                    }
                </Carousel>



            </div>
        </>
    )
}

export default ProductSlider