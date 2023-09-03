"use client"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { BsFillCheckCircleFill, BsCheckLg, BsTruck, BsCartCheck } from "react-icons/bs";
import styles from './styles/productinfo.module.css';
import ProductCounter from "../../../Components/Product/ProductCounter";
function ProductInfo() {
    return (
        <div className={styles.productinfobox}>
            <h1 className={styles.title}>Square Sunglass</h1>
            <div className={styles.ratingbox} >
                <Rating initialRating={4} fullSymbol={<AiFillStar size={20} />} emptySymbol={<AiOutlineStar size={20} />} readonly />
                <span>(20  review) </span>
            </div>
            <div className={styles.pricebox}>
                <p className={styles.cutprice}>$300.00</p>
                <p className={styles.sellprice}>$199.00</p>
                <p className={styles.discountpersen}>-12%</p>
            </div>
            <div className={styles.varitesoption}>
                <div className={styles.varititle}>Size</div>
                <div className={styles.vritoption}>
                    <div className={styles.size}>S</div>
                    <div className={styles.size}>M</div>
                    <div className={styles.size}>L</div>
                </div>
                <div className={styles.varititle}>Color</div>
                <div className={styles.vritoption}>
                    {["FFDBAA", "#FFB7B7", "#96C291"].map((e, i) => {
                        return <div key={"color-" + i} className={styles.color} style={{ backgroundColor: e }}>{i == 0 ? <BsCheckLg size={20} color="#fff" /> : null}</div>
                    })}
                </div>
            </div>
            <p className={styles.alertleft}><BsFillCheckCircleFill color="green" /> Hurry up!! only <span>34</span> items left</p>

            <div className={styles.buysection}>
                <div className={styles.cartoption}>
                    <ProductCounter />
                    <button className={styles.cartaddbtn}>Add To Cart</button>
                </div>
                <div className={styles.buybtn}>BUY NOW</div>
            </div>
            <div className={styles.sumquickinfo}>
                <p className={styles.quickinfo}><BsTruck size={20} /> <b>Estimated Delivery</b> : within 5-7 days</p>
                <p className={styles.quickinfo}><BsCartCheck size={20} /> <b>Free shipping</b> : On Your All Orders</p>


            </div>
        </div>
    )
}
export default ProductInfo