import { account_tablist } from '@/constents/staticlinks'
import styles from './style.module.css'
function Tabbox({ active }) {

    return (
        <div className={styles.tabs}>
            {
                account_tablist.map((e, i) => {
                    return <a href={e.link} key={"tabindex-" + i}>
                        <div className={styles.tab}>
                            <div className={`${styles.tabicon} ${active == e.name ? styles.tabactive : null}`}><e.icon /></div>
                            <p className={styles.tabtitle}>{e.name}</p>
                        </div>
                    </a>
                })
            }
        </div>
    )
}
export default Tabbox