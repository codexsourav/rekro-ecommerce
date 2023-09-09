import { account_tablist } from "@/constents/staticlinks"
import PageWrapper from "../../PageWrapper"
import Tabbox from "../Tabbox"
import styles from '../style.module.css'
import OrderView from "./OrderView"

function MyOrders() {

    return (
        <PageWrapper showall={false}>
            <div className={`container`}>
                <div className={styles.layout}>
                    <div>
                        <Tabbox active={account_tablist[3].name} />
                    </div>
                    <div className={styles.viewsection}>
                        <h1 className={styles.title}>MY Orders</h1>
                        <OrderView />
                        <OrderView />
                        <OrderView />
                        <OrderView />
                        <OrderView />
                        <OrderView />




                    </div>
                </div>
            </div>
        </PageWrapper >
    )
}
export default MyOrders