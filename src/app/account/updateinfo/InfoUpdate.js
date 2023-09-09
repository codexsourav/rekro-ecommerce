"use client";
import styles from '../style.module.css'
import { useState } from "react"

function InfoUpdate() {
    const [chengePass, setchengePass] = useState(false)
    return (
        <div className="updateaccountform">
            <div className={styles.towcolm}>
                <div className="inpbox">
                    <label >First Name</label>
                    <input className="input" />
                </div>
                <div className="inpbox">
                    <label >Last Name</label>
                    <input className="input" />
                </div>
            </div>
            <div className="inpbox">
                <label >Email ID</label>
                <input className="input" />
            </div>
            <p style={{ marginTop: 20, marginBottom: 20 }}>Chenge Password <input type="checkbox" onChange={() => setchengePass(!chengePass)} checked={chengePass} /></p>
            {chengePass ? <div className="chengepass">
                <div className="inpbox">
                    <label >Current password</label>
                    <input className="input" />
                </div>
                <div className={styles.towcolm}>
                    <div className="inpbox">
                        <label >New Password</label>
                        <input className="input" />
                    </div>
                    <div className="inpbox">
                        <label >Confirm New Password</label>
                        <input className="input" />
                    </div>
                </div>
            </div> : null}
            <button className="primarybtnactive" style={{ marginTop: 20 }} >Update Account</button>
        </div>

    )
}
export default InfoUpdate