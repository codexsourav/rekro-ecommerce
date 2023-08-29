"use client";

import styles from "./styles/productbox.module.css";
import Image from 'next/image';
import { HiOutlineEye, HiOutlineShoppingBag } from 'react-icons/hi2';

function ProductBox() {
    return (
        <div className={styles.productbox}>
            <div className={styles.productshow}>
                <div className={styles.productaction}>
                    <div className={styles.actionbtn}><HiOutlineEye /></div>
                    <div className={styles.actionbtn}><HiOutlineShoppingBag /></div>
                </div>
                <Image src="/product/2.webp" width={600} height={650} className={`${styles.productimage} ${styles.imageview1}`} />
                <Image src="/product/1.webp" width={600} height={650} className={`${styles.productimage} ${styles.imageview2}`} />
            </div>
            <div className={styles.productinfo}>
                <h1 className={styles.title}>Casual t-shirts</h1>
                <div className={styles.prices}>
                    <p className={styles.cutprice} >$300.00</p>
                    <p className={styles.sellprice}>$199.00</p>
                </div>
            </div>
        </div>
    )
}

export default ProductBox