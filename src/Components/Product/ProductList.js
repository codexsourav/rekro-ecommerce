import styles from "./styles/bestsell.module.css";
import ProductBox from '@/Components/Product/ProductBox';

function ProductList({ title = null, data }) {

    return (
        <div className="container">
            <div className={styles.bestsell}>
                {title ? <div className={styles.titlebox}>
                    <h1 className={styles.title}>{title}</h1>
                    <a href='/shop' className={styles.seeall}>Shop All</a>
                </div> : null}
                <div className={styles.productslist}>

                    {
                        data.map((e, i) => {
                            return <ProductBox key={e._id} data={e} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList