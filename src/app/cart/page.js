import PageWrapper from "../PageWrapper"
import CartProduct from "./components/CartProduct"
import PriceCart from "./components/PriceCart";
import styles from './style.module.css';
function Cart() {
    return (
        <PageWrapper>
            <div className={styles.bgcolor}>
                <div className="container">
                    <div className={styles.cartinfo}>
                        <div className={styles.products}>
                            <CartProduct />
                        </div>
                        <div className={styles.pricebox}>
                            <PriceCart />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
export default Cart