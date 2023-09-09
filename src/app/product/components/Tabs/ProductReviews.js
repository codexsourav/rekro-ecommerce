import Rattingstars from "@/Components/Product/Rattingstars"
import styles from '../styles/productreview.module.css'
import NewReview from "./NewReview"
function ProductReviews({ data, id }) {
    console.log(data);
    return (

        <div className={styles.reviewcontainer}>
            {data.map((e, i) => {
                return (
                    <div className={styles.reviewbox} key={"review-" + i}>
                        <p className={styles.reviewname}>{e.name}</p>
                        <p className={styles.reviewdate}>{e.date}</p>
                        <Rattingstars iconsize={20} rating={e.star} />
                        <p>{e.review}</p>
                    </div>
                )
            })}


            <NewReview id={id} />
        </div>
    )
}
export default ProductReviews