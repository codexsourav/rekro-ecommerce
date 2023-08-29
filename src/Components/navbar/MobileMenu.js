"use client";
import mobilemenucss from "./Styles/mobilemenu.module.css"
import MegaMenu from "./MegaMenu";
import { HiOutlineXMark, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { useState } from "react";

function MobileMenu({ show, setnav }) {
    const [showShopmenu, setshowShopmenu] = useState(false)
    return (
        <>
            <div className={`${show ? mobilemenucss.openmenu : null} ${mobilemenucss.sideblank} `} onClick={() => setnav(false)}></div>

            <div className={`${mobilemenucss.navmenu} ${show ? mobilemenucss.openmenu : null}`} >
                <div className={mobilemenucss.closeicon}><HiOutlineXMark size={25} onClick={() => setnav(false)} /></div>
                <ul className={mobilemenucss.linkslist}>
                    <li className={mobilemenucss.links}><a className={mobilemenucss.link} href="#">Home</a></li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href="#">New Arrivals</a></li>
                    <li className={`${mobilemenucss.links} ${mobilemenucss.megamenucat}`} >

                        <div className={mobilemenucss.navmenutab}>
                            <a className={mobilemenucss.link} href="#">Shop</a>
                            {!showShopmenu ? <HiOutlineChevronDown onClick={() => setshowShopmenu(!showShopmenu)} className={mobilemenucss.dropdownicon} />
                                : <HiOutlineChevronUp className={mobilemenucss.dropdownicon} onClick={() => setshowShopmenu(!showShopmenu)} />}

                        </div>
                        <div className={`${mobilemenucss.megamenu} ${showShopmenu ? mobilemenucss.megamenuopen : null}`} >
                            <MegaMenu key="mobilemenu" />
                        </div>
                    </li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href="#">Offers</a></li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href="#">Track Order</a></li>
                    <li className={mobilemenucss.links}> <a className={mobilemenucss.link} href="#">FAQ</a></li>
                    <li className={mobilemenucss.links}> <a className={mobilemenucss.link} href="#">Cart</a></li>
                </ul>

            </div>
        </>
    )
}

export default MobileMenu