"use client";
import Collbox from './widgets/collbox'
import styles from "./styles/coll.module.css";
function Collections() {
    return (
        <div className='container' >

            <div className={styles.collsection}>
                <Collbox img='1.png' />
                <Collbox img='2.png' />
                <Collbox img='3.png' />
            </div>


        </div>
    )
}

export default Collections