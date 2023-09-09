import styles from '../style.module.css'
import Image from "next/image"
function OrderView({ showaction = true }) {
    return (
        <div className={styles.orderinfosection}>
            <p className={styles.orderststus}>Status : Approved <a href="#">Track Order</a></p>
            <div className={styles.ordersbox}>
                <div className={styles.orderinfo}>
                    <Image src="/product/1.jpg" width={120} height={120} alt="product" className={styles.productimage} />
                    <div className={styles.pdth}>
                        <span className={styles.producttitle}>Casual t-shirts</span>
                        <span className={styles.productinfotext}>Order ID : REK3948298324</span>
                        <span className={styles.productinfotext}>Color : Red | Size : M</span>
                        <span className={styles.productinfotext}>Order Type : Prepaid</span>
                        <span className={styles.productinfotext}>QUT : 1</span>
                        <span className={styles.orderproductprice}>Price : $300 X 3 = $900.00</span>
                    </div>
                </div>
                <div className={styles.orderAddress}>
                    <p className={styles.producttitle}>Address</p>
                    <p className={styles.productinfotext}>
                        Celeste Slater
                        <br />606-3727 Ullamcorper. Street
                        <br />Roseville NH 11523
                        <br />722141
                    </p>

                </div>
            </div>

            {showaction ? <div className={styles.orcerproductActionBox}>
                <div></div>
                <button className="primarybtn">Cancel Order</button>

            </div> : null}
        </div>
    )
}
export default OrderView