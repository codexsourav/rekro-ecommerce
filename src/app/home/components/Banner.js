import Image from 'next/image'
import styles from "./styles/banner.module.css";
import { Jost } from 'next/font/google';
const jost = Jost({
    weight: '600',
    subsets: ['latin'],
})
function Banner({ pagedata }) {
    const { image, title, subtitle, link, linktitle } = pagedata?.banner;
    return (
        <div className="container">
            <div className={styles.banner}>
                <div className={styles.previewsec}>
                    <Image src={image ?? "/sec/banner1.jpg"} alt='banner' width={600} height={600} className={styles.bannerposter} />
                </div>
                <div className={styles.bannercontent}>
                    <p className={styles.title}>{subtitle ?? "Bags Collection"}</p>
                    <p className={`${styles.desc} ${jost.className}`}>{title ?? "Qdipisicing elit. Aperiam assumenda sapiente aliquam quos vel! Aliquid consequuntur."}</p>
                    <a href={link ?? "#"} className={`primarybtn ${styles.btn}`}>{linktitle ?? "Show Collection"}</a>
                </div>
            </div>
        </div>
    )
}

export default Banner