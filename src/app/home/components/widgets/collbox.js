"use client";
import styles from "../styles/collbox.module.css";
import Image from 'next/image';
function Collbox({ img }) {
    return (
        <div className={styles.collbox}>
            <Image src={'/sec/' + img} width={380} height={220} className={styles.bgimg} />
            <div className={styles.content}>
                <h2 className={styles.title}>Title Here</h2>
                <a href='#' className={styles.action}>See All</a>
            </div>
        </div>
    )
}

export default Collbox