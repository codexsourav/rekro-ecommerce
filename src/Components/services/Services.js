import React from 'react'
import styles from "./styles/style.service.module.css";
import Image from 'next/image';
function Services() {
    return (

        <div className={styles.services}>
            <div className={styles.service}>
                <Image src='/icons/free-shipping.svg' width={50} height={50} className={styles.iconservice} />
                <div className={styles.content}>
                    <h2 className={styles.title}>Free Shipping</h2>
                    <p className={styles.subtitle}>On order over $1499</p>
                </div>
            </div>
            <div className={styles.service}>
                <Image src='/icons/quick-payment.svg' width={50} height={50} className={styles.iconservice} />
                <div className={styles.content}>
                    <h2 className={styles.title}>Quick Payment</h2>
                    <p className={styles.subtitle}> Online Quick Payment</p>
                </div>
            </div>
            <div className={styles.service}>
                <Image src='/icons/esy-return.svg' width={50} height={50} className={styles.iconservice} />
                <div className={styles.content}>
                    <h2 className={styles.title}>Easy Return</h2>
                    <p className={styles.subtitle}>Return within 24 hours</p>
                </div>
            </div>
            <div className={styles.service}>
                <Image src='/icons/support.svg' width={50} height={50} className={styles.iconservice} />
                <div className={styles.content}>
                    <h2 className={styles.title}>24/7 Support</h2>
                    <p className={styles.subtitle}> Customer Online Support</p>
                </div>
            </div>
        </div>

    )
}

export default Services