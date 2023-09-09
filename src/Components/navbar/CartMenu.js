"use client";
import Image from "next/image";
import styles from "./Styles/cartmenu.module.css";
import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setcarttoogle } from "@/Services/menutoggle/toogle";
import { staticlinks } from "@/constents/staticlinks";
import { removeTocart } from "@/Services/product/CartProducts";

function CartMenu() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const toogle = useSelector((state) => state.toogle);
    const getTotalprice = () => {
        let totalprice = 0;


        for (let i = 0; i < cart.products.length; i++) {
            totalprice += (cart.products[i].sellprice * cart.products[i].qut);
        }
        return totalprice;
    }

    return (
        <>
            <div className={` ${styles.sideblank} ${toogle.carttoggle ? styles.opencartitembox : null}`} onClick={() => dispatch(setcarttoogle(false))} ></div>
            <div className={`${styles.cartmenu} ${toogle.carttoggle ? styles.opencartitembox : null}`}>

                <div className={styles.header}>
                    <div>Your Cart</div>
                    <HiOutlineXMark size={25} onClick={() => dispatch(setcarttoogle(false))} className={styles.crossicon} />
                </div>

                <div className={styles.products}>
                    {cart.products.map((e, i) => {
                        return <div className={styles.product} key={"cart_item_" + i}>
                            <div className={styles.productinfo}>
                                <a href="/product"><Image alt="product" src={e.images[0] ?? "/product/1.jpg"} width={80} height={80} style={{ objectFit: "cover" }} />
                                </a>
                                <div className={styles.pinfo}>
                                    <p className={styles.producttitle}>{e.title}</p>
                                    <p>₹{e.sellprice}.00</p>
                                    <p>QUT : {e.qut} </p>
                                </div>
                            </div>
                            <div className={styles.removecart} onClick={() => dispatch(removeTocart(e))} >
                                <HiOutlineXMark />
                            </div>
                        </div>
                    })}



                </div>

                <div className={styles.actionbox}>
                    <p className={styles.subtotal}>Subtotal: {getTotalprice()}.00 RS</p>
                    <div className={styles.actions}>
                        <a href={staticlinks.cart} className={`${styles.actionbtn} ${styles.actioncartbtn}`}>View Cart</a>
                        <a href={staticlinks.checkout} className={styles.actionbtn}>Chackout</a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CartMenu