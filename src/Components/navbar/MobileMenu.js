"use client";
import mobilemenucss from "./Styles/mobilemenu.module.css"
import MegaMenu from "./MegaMenu";
import { HiOutlineXMark, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";

function MobileMenu({ show, setnav }) {
    const [showShopmenu, setshowShopmenu] = useState(false)
    const [showpages, setshowpages] = useState(false)

    return (
        <>
            <div className={`${show ? mobilemenucss.openmenu : null} ${mobilemenucss.sideblank} `} onClick={() => setnav(false)}></div>

            <div className={`${mobilemenucss.navmenu} ${show ? mobilemenucss.openmenu : null}`} >
                <div className={mobilemenucss.closeicon}><HiOutlineXMark size={25} onClick={() => setnav(false)} /></div>
                <ul className={mobilemenucss.linkslist}>
                    <li className={mobilemenucss.links}><Link className={mobilemenucss.link} href="/home">Home</Link></li>
                    <li className={mobilemenucss.links}>  <Link className={mobilemenucss.link} href="/search?s=test">New Arrivals</Link></li>
                    <li className={`${mobilemenucss.links} ${mobilemenucss.megamenucat}`} >

                        <div className={mobilemenucss.navmenutab}>
                            <a className={mobilemenucss.link} href="#">Shop</a>
                            {!showShopmenu ? <HiOutlineChevronDown onClick={() => {
                                setshowShopmenu(true)
                                setshowpages(false)
                            }} className={mobilemenucss.dropdownicon} />
                                : <HiOutlineChevronUp className={mobilemenucss.dropdownicon} onClick={() => {
                                    setshowShopmenu(false)
                                    setshowpages(false)
                                }} />}

                        </div>
                        <div className={`${mobilemenucss.megamenu} ${showShopmenu ? mobilemenucss.megamenuopen : null}`} >
                            <MegaMenu key="mobilemenu" />
                        </div>
                    </li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href="#">Offers</a></li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href="#">Track Order</a></li>
                    <li className={`${mobilemenucss.links} ${mobilemenucss.megamenucat}`} >

                        <div className={mobilemenucss.navmenutab} onClick={() => {
                            setshowpages(!showpages)
                            setshowShopmenu(false)
                        }}>
                            <span className={mobilemenucss.link}>Pages</span>
                            {!showpages ? <HiOutlineChevronDown className={mobilemenucss.dropdownicon} />
                                : <HiOutlineChevronUp className={mobilemenucss.dropdownicon} />}
                        </div>
                        <div className={`${mobilemenucss.megamenu} ${showpages ? mobilemenucss.megamenuopen : null}`} >
                            <MegaMenu key="mobilemenu" />
                        </div>
                    </li>
                    <li className={mobilemenucss.links}> <a className={mobilemenucss.link} href="#">Cart</a></li>

                </ul>

            </div>
        </>
    )
}

export default MobileMenu