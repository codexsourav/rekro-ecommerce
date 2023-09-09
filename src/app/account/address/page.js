"use client"
import { account_tablist } from "@/constents/staticlinks"
import PageWrapper from "../../PageWrapper"
import Tabbox from "../Tabbox"
import styles from '../style.module.css'
import Addressform from "./Addressform"
function Address() {

    return (
        <PageWrapper showall={false}>
            <div className={`container`}>
                <div className={styles.layout}>
                    <div>
                        <Tabbox active={account_tablist[2].name} />
                    </div>
                    <div className={styles.viewsection}>
                        <h1 className={styles.title}>Update Address</h1>
                        <Addressform />
                    </div>
                </div>
            </div>
        </PageWrapper >
    )
}
export default Address