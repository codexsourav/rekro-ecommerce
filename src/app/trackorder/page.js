import PageWrapper from "../PageWrapper";
import styles from './styles.module.css'
function TrackOrder() {
    return (
        <PageWrapper>
            <div className="container">
                <div className={styles.trackinputbox}>
                    <h1 className={styles.title}>Track Your Order</h1>
                    <div className={styles.trackform}>
                        <div className="inpbox">
                            <label >Billing Email ID</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="inpbox">
                            <label >Your Order ID</label>
                            <input type="text" className="input" />
                        </div>
                        <button className="primarybtnactive" style={{ marginTop: 10 }}>Track Your Order</button>

                    </div>
                </div>

            </div>
        </PageWrapper>
    )
}
export default TrackOrder;