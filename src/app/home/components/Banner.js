"use client";
import Image from 'next/image'
import React from 'react'
import styles from "./styles/banner.module.css";
import { Jost } from 'next/font/google';
const jost = Jost({
    weight: '600',
    subsets: ['latin'],
})
function Banner() {

    return (
        <div className="container">
            <div className={styles.banner}>
                <div className={styles.previewsec}>
                    <Image src="/sec/banner.jpg" width={600} height={600} className={styles.bannerposter} />
                </div>
                <div className={styles.bannercontent}>
                    <p className={styles.title}>Bags Collection</p>
                    <p className={`${styles.desc} ${jost.className}`}>Qdipisicing elit. Aperiam assumenda sapiente aliquam quos vel! Aliquid consequuntur.</p>
                    <a href="#" className={styles.btn}>Show Collection</a>
                </div>
            </div>
        </div>
    )
}

export default Banner