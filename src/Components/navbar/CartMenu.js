"use client";
import styles from "./Styles/cartmenu.module.css";
import { HiOutlineXMark } from "react-icons/hi2";

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
                    </div>

                    <div className={styles.product}>
                    </div>
                    <div className={styles.product}>
                    </div>
                    <div className={styles.product}>
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