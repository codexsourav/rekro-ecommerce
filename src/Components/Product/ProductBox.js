"use client"
import styles from "./styles/productbox.module.css";
import Image from 'next/image';
import { HiOutlineEye, HiOutlineShoppingBag } from 'react-icons/hi2';
import Rattingstars from "./Rattingstars";
import { useDispatch } from "react-redux";
import { addtocart } from "@/Services/product/CartProducts";
import { setcarttoogle } from "@/Services/menutoggle/toogle";

function ProductBox({ data }) {
    const dispatch = useDispatch();
    const setaddcart = () => {
        dispatch(addtocart({ ...data, qut: 1 }));
        dispatch(setcarttoogle(true));
    }
    return (
        <div className={styles.productbox}>
            {data?.discount > 20 ? <div className={styles.offer}>-{data.discount}%</div> : null}
            <div className={styles.productshow}>
                <div className={styles.productaction}>
                    <a href={"/product/" + data?._id} className={styles.actionbtn}><HiOutlineEye /></a>
                    <span onClick={setaddcart} className={styles.actionbtn}><HiOutlineShoppingBag /></span>
                </div>
                <Image alt="p1" src={data?.images[0] ?? "/product/1.jpg"} width={600} height={650} className={`${styles.productimage} ${styles.imageview1}`} />
                <Image alt="p2" src={data?.images[1] ?? "/product/2.jpg"} width={600} height={650} className={`${styles.productimage} ${styles.imageview2}`} />
            </div>

            <div className={styles.productinfo}>
                <a href={"/product/" + data?._id}><h1 className={styles.title}>{data?.title ?? "title"}</h1></a>
                <Rattingstars iconsize={16} rating={data?.stars ?? 0} />
                <div className={styles.prices}>
                    <p className={styles.cutprice} >₹{data?.price ?? "00"}.00</p>
                    <p className={styles.sellprice}>₹{data?.sellprice ?? "00"}.00</p>
                </div>

            </div>
        </div>
    )
}

export default ProductBox