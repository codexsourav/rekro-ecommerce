import { IoIosClose, IoIosOptions, IoIosSwap } from "react-icons/io";

import styles from './styles/filterbox.module.css'
import Slider from "rc-slider";
import { useState } from "react";

function Filterbox() {
    const [priceslider, setpriceslider] = useState([0, 200])
    const [showfilter, setshowfilter] = useState(false)


    return (
        <>
            <div className={styles.filtersection}>
                <div className={styles.filter} onClick={() => setshowfilter(true)}><IoIosOptions /> <p>Filter</p></div>
                <div className={styles.sortbox}>
                    <select className={styles.sort}>

                        <option>Default Sort</option>
                        <option>Sort By Populer</option>
                        <option>Sort By Rating</option>
                        <option>Price: Low To High</option>
                        <option>Price: High To Low</option>

                    </select>
                    <IoIosSwap size={18} />
                </div>
            </div>
            {/* this is filter drower  */}
            <div className={`${styles.overlay}   ${showfilter ? styles.active : null}`} onClick={() => setshowfilter(false)}></div>
            <div className={`${styles.filteroptionbox} ${showfilter ? styles.active : null}`}>
                <div className={styles.header}>
                    <div className="title">
                        <p>Select Filter</p>
                    </div>
                    <IoIosClose size={30} onClick={() => setshowfilter(false)} style={{ cursor: "pointer" }} />
                </div>
                <div className={styles.filtercate}>

                    <h3 className={styles.sectitle}>Product collections</h3>
                    {
                        ["Accessories",
                            "Bags",
                            "Best Selling",
                            "Clothes",
                            "Shoes"].map((e, i) => {
                                return <p key={i} className={styles.linklist}>{e}  ({i})</p>
                            })
                    }
                </div>

                <div className={styles.filtercate}>
                    <h3 className={styles.sectitle}>Filter by price</h3>
                    <Slider range
                        min={0.00}
                        max={200.00}
                        defaultValue={priceslider}
                        tipFormatter={(value) => `${value}!`}
                        onChange={(data) => {
                            setpriceslider(data)
                        }}
                        className={styles.priceslider}
                    />
                    <div className={styles.slidervalue}>
                        <p>₹ {priceslider[0]}.00</p>
                        <p>₹ {priceslider[1]}.00</p>
                    </div>
                </div>

                <div className={styles.filtercate}>
                    <h3 className={styles.sectitle}>Colors</h3>
                    {
                        ["Red",
                            "Black",
                            "White",
                            "Green",
                            "Baby Pink"].map((e, i) => {
                                return <div key={i} className={styles.chacksfilter}>
                                    <input type="checkbox" className={styles.chackboxinp} checked={i == 1} onChange={(e) => console.log(e)} />
                                    <span className={styles.checkmark}></span>
                                    <p className={styles.linklist}>{e}</p>
                                </div>
                            })
                    }
                </div>

                <div className={styles.filtercate}>
                    <h3 className={styles.sectitle}>Cloth Size</h3>
                    {
                        ["L",
                            "M",
                            "S",
                        ].map((e, i) => {
                            return <div key={i} className={styles.chacksfilter}>
                                <input type="checkbox" className={styles.chackboxinp} checked={i == 1} onChange={(e) => console.log(e)} />
                                <span className={styles.checkmark}></span>
                                <p className={styles.linklist}>{e}</p>
                            </div>
                        })
                    }
                </div>

                <div className={styles.filtercate}>
                    <h3 className={styles.sectitle}>Shows Size</h3>
                    {
                        ["L",
                            "M",
                            "S",
                        ].map((e, i) => {
                            return <div key={i} className={styles.chacksfilter}>
                                <input type="checkbox" className={styles.chackboxinp} checked={i == 1} onChange={(e) => console.log(e)} />
                                <span className={styles.checkmark}></span>
                                <p className={styles.linklist}>{i + 6}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Filterbox