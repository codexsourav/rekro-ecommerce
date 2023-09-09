import Collbox from './widgets/collbox'
import styles from "./styles/coll.module.css";
function Collections({ pagedata }) {
    const { firstcollection, secendcollection, thurdcollection } = pagedata;

    return (
        <div className='container' >
            <div className={styles.collsection}>
                <Collbox info={firstcollection} />
                <Collbox info={secendcollection} flip />
                <Collbox info={thurdcollection} />
            </div>
        </div>
    )
}

export default Collections