"use client";

import styles from "./styles/productbox.module.css";
import Image from 'next/image';
import Link from "next/link";
import { HiOutlineEye, HiOutlineShoppingBag } from 'react-icons/hi2';

function ProductBox() {
    return (
        <div className={styles.productbox}>
            <div className={styles.offer}>-10%</div>
            <div className={styles.productshow}>
                <div className={styles.productaction}>
                    <Link href="/product" className={styles.actionbtn}><HiOutlineEye /></Link>
                    <Link href="/" className={styles.actionbtn}><HiOutlineShoppingBag /></Link>
                </div>
                <Image alt="p1" src="/product/1.jpg" width={600} height={650} className={`${styles.productimage} ${styles.imageview1}`} />
                <Image alt="p2" src="/product/2.jpg" width={600} height={650} className={`${styles.productimage} ${styles.imageview2}`} />
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