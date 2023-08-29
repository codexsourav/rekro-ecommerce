"use client";
import styles from "./styles/hero.module.css";
import Image from 'next/image';
function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className="container">

                <div className={styles.heroitems}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>new women fashion</h3>
                        <h1 className={styles.title}>Summer essential stock</h1>
                        <a href='#' className={styles.btn}>Shop Now</a>
                    </div>
                    <div className={styles.heroimage}>
                        <div className={styles.round}></div>
                        <Image src="/images/banner-img.webp" width={400} height={460} className={styles.heroimg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection