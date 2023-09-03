"use client";
import Image from "next/image";
import styles from "./Styles/cartmenu.module.css";
import { HiOutlineXMark } from "react-icons/hi2";
import ProductCounter from "../Product/ProductCounter";

function CartMenu({ toggle, show }) {
    return (
        <>
            <div className={` ${styles.sideblank} ${show ? styles.opencartitembox : null}`} onClick={() => toggle(false)} ></div>
            <div className={`${styles.cartmenu} ${show ? styles.opencartitembox : null}`}>

                <div className={styles.header}>
                    <div>Your Cart</div>
                    <HiOutlineXMark size={25} onClick={() => toggle(false)} className={styles.crossicon} />
                </div>

                <div className={styles.products}>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productinfo}>
                            <Image src="/product/1.jpg" width={80} height={80} />
                            <div className={styles.pinfo}>
                                <p>Casual t-shirts</p>
                                <p>$399.00</p>
                                <p>QUT : 1 </p>
                            </div>
                        </div>
                        <div className={styles.removecart} >
                            <HiOutlineXMark />
                        </div>
                    </div>
                </div>

                <div className={styles.actionbox}>
                    <p className={styles.subtotal}>Subtotal: 129:00 RS</p>
                    <div className={styles.actions}>
                        <a href='#' className={`${styles.actionbtn} ${styles.actioncartbtn}`}>View Cart</a>
                        <a href='#' className={styles.actionbtn}>Chackout</a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CartMenu