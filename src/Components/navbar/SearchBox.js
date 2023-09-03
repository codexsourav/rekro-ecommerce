
import styles from './Styles/searchbox.module.css'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'
function SearchBox({ onclose }) {
    return (
        <div className={styles.searchbox}>
            <div className="container">
                <HiXMark className={styles.closeicon} onClick={() => onclose(false)} />
                <div className={styles.box}>
                    <input type="text" className={styles.searchinp} placeholder='Search...' />
                    <HiMagnifyingGlass size={35} className={styles.searchicon} />
                </div>
            </div>
        </div>
    )
}

export default SearchBox