import styles from "../styles/collbox.module.css";
import Image from 'next/image';
function Collbox({ img, flip = false, info }) {
    console.log(info);
    return (
        <div className={`${styles.collbox} ${flip ? styles.collboxflip : null}`}>
            <Image alt="secimg" src={info?.image ?? "/sec/1.png"} width={380} height={220} className={styles.bgimg} />
            <div className={styles.content}>
                <h2 className={styles.title}>{info?.title ?? "Title Here"}</h2>
                <a href={info?.link ?? "/shop"} className={styles.action}>{info?.linktitle ?? "See All"}</a>
            </div>
        </div>
    )
}

export default Collbox