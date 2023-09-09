
import { account_tablist } from "@/constents/staticlinks"
import PageWrapper from "../../PageWrapper"
import Tabbox from "../Tabbox"
import styles from '../style.module.css'
import InfoUpdate from "./InfoUpdate"

function UpdateAccount() {

    return (
        <PageWrapper showall={false}>
            <div className={`container`}>
                <div className={styles.layout}>
                    <div>
                        <Tabbox active={account_tablist[1].name} />
                    </div>
                    <div className={styles.viewsection}>
                        <h1 className={styles.title}>Account Information</h1>
                        <InfoUpdate />
                    </div>
                </div>
            </div>
        </PageWrapper >
    )
}
export default UpdateAccount