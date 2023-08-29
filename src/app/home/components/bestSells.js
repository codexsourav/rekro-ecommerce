"use client";
import styles from "./styles/bestsell.module.css";
import ProductBox from '@/Components/Product/ProductBox';

function BestSells() {
    return (
        <div className="container">
            <div className={styles.bestsell}>
                <h1 className={styles.title}>Populer Products</h1>
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

export default BestSells