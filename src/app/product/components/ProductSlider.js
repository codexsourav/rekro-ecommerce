"use client"
import { Carousel } from 'react-responsive-carousel';
import styles from './styles/productslide.module.css';

function ProductSlider({ data }) {
    const images = data?.images;
    return (
        <div className={styles.productslide} >
            <Carousel infiniteLoop showArrows show thumbWidth={100} showStatus={false} showIndicators={false} swipeable={true}>
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