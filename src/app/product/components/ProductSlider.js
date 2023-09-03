"use client"

import { Carousel } from 'react-responsive-carousel';
import styles from './styles/productslide.module.css';
const images = [
    "/insta/2.jpg",
    "/insta/1.jpg",

]
function ProductSlider() {

    return (
        <div className={styles.productslide} >
            <Carousel infiniteLoop showArrows show thumbWidth={100} showStatus={false} showIndicators={false} swipeable>
                {
                    images.map((e, i) => {
                        return <div key={"keyimage-" + i} className={styles.productimgbox}  >
                            <img alt='test' src={e} className={styles.productimg} />
                        </div>
                    })
                }

            </Carousel>

        </div>
    )
}
export default ProductSlider