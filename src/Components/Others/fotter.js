
import styles from './styles/fotter.module.css'
import { BiCopyright, BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoWhatsappSquare, BiLogoYoutube } from "react-icons/bi";
import Image from 'next/image';
function Fotter() {
    return (
        <div className={styles.fottertop}>
            <div className='container'>
                <div className={styles.fotter}>
                    <div className={styles.socailicons}>
                        <BiLogoFacebook size={25} />
                        <BiLogoInstagramAlt size={25} />
                        <BiLogoTwitter size={25} />
                        <BiLogoWhatsappSquare size={25} />
                        <BiLogoYoutube size={25} />
                    </div>
                    <div className={styles.title}>
                        <BiCopyright size={20} /> <span> By Sourav</span>
                    </div>
                    <div className={styles.payment}>
                        <Image alt='pay1' src="/icons/pay/1.png" width={50} height={20} className={styles.payimg} />
                        <Image alt='pay2' src="/icons/pay/2.png" width={50} height={20} className={styles.payimg} />
                        <Image alt='pay3' src="/icons/pay/3.png" width={50} height={20} className={styles.payimg} />
                        <Image alt='pay4' src="/icons/pay/4.png" width={50} height={20} className={styles.payimg} />
                        <Image alt='pay5' src="/icons/pay/5.png" width={50} height={20} className={styles.payimg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter