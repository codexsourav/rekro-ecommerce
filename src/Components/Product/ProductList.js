"use client";

import styles from "./styles/bestsell.module.css";
import ProductBox from '@/Components/Product/ProductBox';

function ProductList({ title = null }) {

    return (
        <div className="container">
            <div className={styles.bestsell}>
                {title ? <div className={styles.titlebox}>
                    <h1 className={styles.title}>{title}</h1>
                    <a href='#' className={styles.seeall}>Shop All</a>
                </div> : null}
                <div className={styles.productslist}>
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </div>
            </div>
        </div>
    )
}

export default ProductList