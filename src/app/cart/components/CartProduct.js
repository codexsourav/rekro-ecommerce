"use client"
import Image from "next/image"
import styles from './styles/cartproduct.module.css';
import ProductCounter from "@/Components/Product/ProductCounter";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removeTocart } from "@/Services/product/CartProducts";
function CartProduct() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const setcountrproduct = (v, e) => {
        if (v != true) {
            if (e.qut > 1) {
                dispatch(addtocart({ ...e, qut: - 1 }))
            }
            return false;
        } else if (e.qut < e.stock) {
            dispatch(addtocart({ ...e, qut: + 1 }))
        }
    }
    return (
        <div className={styles.cartproductbox}>

            <table className={styles.productslist}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>


                    {cart.products.map((e, i) => {
                        return <tr key={"cart_" + i}>
                            <td>
                                <div className={styles.productdtl}>
                                    <AiOutlineCloseCircle size={30} className={styles.removeicon} onClick={() => dispatch(removeTocart(e))} />
                                    <Image src={e.images[0] ?? '/product/1.jpg'} alt="product" width={70} height={70} className={styles.productimage} />

                                    <div className={styles.info}>
                                        <p>{e.title}</p>
                                        <p className={styles.cutprice}>₹{e.price}.00</p>
                                        <p>₹{e.sellprice}.00</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <ProductCounter count={e.qut} setcountrproduct={(v) => setcountrproduct(v, e)} />
                            </td>
                            <td>₹{e.sellprice * e.qut}.00</td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}
export default CartProduct