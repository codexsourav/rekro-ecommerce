"use client"
import { BsFillCheckCircleFill, BsCheckLg, BsTruck, BsCartCheck } from "react-icons/bs";
import styles from './styles/productinfo.module.css';
import ProductCounter from "../../../Components/Product/ProductCounter";
import Rattingstars from "../../../Components/Product/Rattingstars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "@/Services/product/CurrentProduct";
import { addtocart } from "@/Services/product/CartProducts";
import { setcarttoogle } from "@/Services/menutoggle/toogle";
function ProductInfo({ data, reviews }) {
    const [color, setcolor] = useState(0)
    const [size, setsize] = useState(0)



    const dispatch = useDispatch();
    const { product } = useSelector(state => state.product);


    const setSelectColor = (i) => {
        setcolor(i);
        dispatch(setProduct({ ...data, selectcolor: data?.color[i], qut: product.qut }))
    }


    const setSelectSize = (i) => {
        setsize(i);
        dispatch(setProduct({ ...data, selectsize: data?.size[i], qut: product.qut }))
    }

    const setcountrproduct = (e) => {
        if (e != true) {
            if (product.qut > 1) {
                dispatch(setProduct({ ...data, qut: product.qut - 1 }))
            }
            return false;
        } else if (product.qut < data.stock) {

            dispatch(setProduct({ ...data, qut: product.qut + 1 }))
        }
    }

    const setTocart = () => {
        dispatch(addtocart(product));
        dispatch(setcarttoogle(true));
    }

    useEffect(() => {
        dispatch(setProduct({ ...data, qut: 1 }))
    }, [data])

    console.log(product);
    return (
        <div className={styles.productinfobox}>
            <div className={styles.stickontop}>
                <h1 className={styles.title}>{data?.title ?? "title"}</h1>
                <div className={styles.ratingbox} >
                    <Rattingstars rating={data?.stars} />
                    <span>({reviews}  review) </span>
                </div>
                <div className={styles.pricebox}>
                    <p className={styles.cutprice}>₹{data?.price ?? "00"}.00</p>
                    <p className={styles.sellprice}>₹{data?.sellprice ?? "00"}.00</p>
                    <p className={styles.discountpersen}>-{data?.discount}%</p>
                </div>
                <div className={styles.varitesoption}>
                    {data?.size.length == 0 ? null : (<>
                        <div className={styles.varititle}>Size</div>
                        <div className={styles.vritoption}>
                            {data?.size.map((e, i) => {
                                return <div onClick={() => setSelectSize(i)} className={`${styles.size} ${size == i ? styles.active : null}`} key={"size-" + i}>{e}</div>
                            })}

                        </div>
                    </>)}


                    {data?.color.length == 0 ? null : (<>
                        <div className={styles.varititle}>Color</div>
                        <div className={styles.vritoption}>
                            {data?.color.map((e, i) => {
                                return <div key={"color-" + i} className={styles.color} style={{ backgroundColor: e }} onClick={() => setSelectColor(i)}>{i == color ? <BsCheckLg size={20} color="#fff" /> : null}</div>
                            })}

                        </div>
                    </>)}

                </div>
                {data?.stock < 20 ? <p className={styles.alertleft}><BsFillCheckCircleFill color="green" /> Hurry up!! only <span>{data?.stock}</span> items left</p> : null}

                <div className={styles.buysection}>
                    <div className={styles.cartoption}>
                        <ProductCounter count={product.qut} setcountrproduct={setcountrproduct} />
                        <button className={styles.cartaddbtn} onClick={setTocart}>Add To Cart</button>
                    </div>
                    <div className={styles.buybtn}>BUY NOW</div>
                </div>
                <div className={styles.sumquickinfo}>
                    <p className={styles.quickinfo}><BsTruck size={20} /> <b>Estimated Delivery</b> : within 5-7 days</p>
                    <p className={styles.quickinfo}><BsCartCheck size={20} /> <b>Free shipping</b> : On Your All Orders</p>


                </div>
            </div>
        </div>
    )
}
export default ProductInfo