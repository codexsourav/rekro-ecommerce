import styles from "./styles/hero.module.css";
import Image from 'next/image';
function HeroSection({ pagedata }) {

    return (
        <div className={styles.heroSection}>
            <div className="container">

                <div className={styles.heroitems}>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>{pagedata?.herosubtitle ?? "new women fashion"}</h3>
                        <h1 className={styles.title}>{pagedata?.herotitle ?? "Summer essential stock"}</h1>
                        <a href={pagedata?.herosubtitle ?? "/shop"} className={`primarybtn ${styles.btn}`}>{pagedata?.herolinktitle ?? "Shop Now"}</a>
                    </div>
                    <div className={styles.heroimage}>
                        <div className={styles.round}></div>
                        <Image alt="bannerimg" src={pagedata?.heroimg ?? "/images/banner-img2.webp"} width={700} height={1000} className={styles.heroimg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection