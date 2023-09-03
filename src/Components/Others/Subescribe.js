
import styles from './styles/subscribe.module.css'
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image';
function Subescribe() {
    return (
        <div className="container">
            <div className={styles.subscribe}>
                <Image alt='mail' src="/icons/mail.png" width={100} height={100} className={styles.mailicon} />
                <h1 className={styles.title}>
                    Subscribe newsletter
                </h1>
                <p className={styles.desc}>
                    Subscribe Now and get more offers
                </p>
                <div className={styles.formbox}>
                    <input type="text" className={styles.submailbox} placeholder='Your Email ID...' />
                    <button className={styles.subbtn}>Subescribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subescribe