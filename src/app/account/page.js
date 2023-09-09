"use client";
import { account_tablist } from "@/constents/staticlinks"
import PageWrapper from "../PageWrapper"
import Tabbox from "./Tabbox"
import styles from './style.module.css'
import { useSession } from "next-auth/react"
function Account() {


    return (
        <PageWrapper showall={false}>
            <div className={`container`}>
                <div className={styles.layout}>
                    <div>    <Tabbox active={account_tablist[0].name} /></div>
                    <div className={styles.viewsection}>
                        <h1 className={styles.title}>Welcome back Sourav</h1>
                        <p className={styles.info}> From your account dashboard you can view your <a href="#">recent orders</a>, manage your shipping <a href="#">addresses</a> , and edit your <a href="#">password and account</a> details.</p>
                    </div>
                </div>
            </div>
        </PageWrapper >
    )
}
export default Account