
import { useDispatch } from 'react-redux'
import styles from './Styles/searchbox.module.css'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'
import { setsearchbox } from '@/Services/menutoggle/toogle'
function SearchBox() {
    const dispatch = useDispatch()
    return (
        <div className={styles.searchbox}>
            <div className="container">
                <HiXMark className={styles.closeicon} onClick={() => dispatch(setsearchbox(false))} />
                <div className={styles.box}>
                    <input type="text" className={styles.searchinp} placeholder='Search...' />
                    <HiMagnifyingGlass size={35} className={styles.searchicon} />
                </div>
            </div>
        </div>
    )
}

export default SearchBox