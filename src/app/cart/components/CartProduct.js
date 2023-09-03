import Image from "next/image"
import styles from './styles/cartproduct.module.css';
import ProductCounter from "@/Components/Product/ProductCounter";
import { AiOutlineCloseCircle } from "react-icons/ai";
function CartProduct() {
    return (
        <div className={styles.cartproductbox}>

            <table className={styles.productslist}>

                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {[1].map((e, i) => {
                    return <tr key={"id" + i}>
                        <td>
                            <div className={styles.productdtl}>
                                <AiOutlineCloseCircle size={30} className={styles.removeicon} />
                                <Image src='/product/1.jpg' width={70} height={70} className={styles.productimage} />

                                <div className={styles.info}>
                                    <p>Casual t-shirts Red color Free</p>
                                    <p className={styles.cutprice}>$699.00</p>
                                    <p>$399.00</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <ProductCounter />
                        </td>
                        <td>$300.00</td>
                    </tr>
                })}


            </table>

        </div>
    )
}
export default CartProduct