import styles from './styles/pricecart.module.css';
function PriceCart() {
    return (
        <div className={styles.cartchackout}>
            <p className={styles.title}>Cart totals</p>
            <div >
                <div className={styles.info}>
                    <p>Subtotal</p>
                    <p>$1,122.00</p>
                </div>
                <div className={styles.info}>
                    <p>Quantity</p>
                    <p>5</p>
                </div>
                <div className={styles.info}>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <div className={styles.info} style={{ fontWeight: 500 }}>
                    <p>Total</p>
                    <p>$1,132.00</p>
                </div>
            </div>
            <button className='primarybtn' >Checkout</button>
        </div>
    )
}
export default PriceCart