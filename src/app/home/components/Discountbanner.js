
import styles from './styles/discountbanner.module.css'
function Discountbanner() {
    return (
        <div className={styles.banner} >
            <h1 className={styles.title}>SALE UP TO 50% OFF</h1>
            <p className={styles.desc}>Get these top picks</p>
            <a className='primarybtn'>Shop Now</a>
        </div>
    )
}

export default Discountbanner