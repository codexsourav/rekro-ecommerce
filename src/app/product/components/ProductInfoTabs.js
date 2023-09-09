"use client"
import { useState } from 'react';
import ProductDesc from './Tabs/ProductDesc';
import styles from './styles/infotabs.module.css';
import ProductReviews from './Tabs/ProductReviews';
function ProductInfoTabs({ desc, reviews, id }) {
    const [tabindex, settabindex] = useState(0)

    return (
        <div className={styles.tabcontainer}>
            <div className={styles.taboptions}>
                <div className={`${styles.tab} ${tabindex == 0 ? styles.active : null}`} onClick={() => settabindex(0)}><p> Description </p></div>
                <div className={`${styles.tab} ${tabindex != 0 ? styles.active : null}`} onClick={() => settabindex(1)}><p>  Reviews ({reviews.length ?? 0})  </p></div>
            </div>
            {tabindex == 0 ? <ProductDesc data={desc} /> : <ProductReviews data={reviews} id={id} />}
        </div >
    )
}
export default ProductInfoTabs