"use client"
import { useSelector } from 'react-redux';
import styles from './styles/pricecart.module.css';
import { staticlinks } from '@/constents/staticlinks';
function PriceCart() {
    const cart = useSelector(state => state.cart);
    let totalprice = 0;
    let qwt = 0;

    for (let i = 0; i < cart.products.length; i++) {
        totalprice += (cart.products[i].sellprice * cart.products[i].qut);
        qwt += cart.products[i].qut;
    }
    return (
        <div>
            <div className={styles.cartchackout}>
                <p className={styles.title}>Cart totals</p>
                <div >
                    <div className={styles.info}>
                        <p>Subtotal</p>
                        <p>₹{totalprice}.00</p>
                    </div>
                    <div className={styles.info}>
                        <p>Quantity</p>
                        <p>{qwt}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className={styles.info} style={{ fontWeight: 500 }}>
                        <p>Total</p>
                        <p>₹{totalprice}.00</p>
                    </div>
                </div>
                <a className='primarybtnactive' href={staticlinks.checkout} >Checkout</a>
            </div>
        </div>
    )
}
export default PriceCart