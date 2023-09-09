"use client"
import mobilemenucss from "./Styles/mobilemenu.module.css"
import MegaMenu from "./MegaMenu";
import { HiOutlineXMark, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setdrawer } from "@/Services/menutoggle/toogle";
import { staticlinks } from "@/constents/staticlinks";

function MobileMenu() {
    const dispatch = useDispatch();
    const toogle = useSelector((state) => state.toogle);
    const [showShopmenu, setshowShopmenu] = useState(false)
    const [showpages, setshowpages] = useState(false)

    return (
        <>
            <div className={`${toogle.drawer ? mobilemenucss.openmenu : null} ${mobilemenucss.sideblank} `} onClick={() => dispatch(setdrawer(false))}></div>

            <div className={`${mobilemenucss.navmenu} ${toogle.drawer ? mobilemenucss.openmenu : null}`} >
                <div className={mobilemenucss.closeicon}><HiOutlineXMark size={25} onClick={() => dispatch(setdrawer(false))} /></div>
                <ul className={mobilemenucss.linkslist}>
                    <li className={mobilemenucss.links}><a className={mobilemenucss.link} href={staticlinks.home}>Home</a></li>
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href={staticlinks.newProducts}>New Arrivals</a></li>
                    <li className={`${mobilemenucss.links} ${mobilemenucss.megamenucat}`} >

                        <div className={mobilemenucss.navmenutab}>
                            <a className={mobilemenucss.link} href={staticlinks.shop}>Shop</a>
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
                    <li className={mobilemenucss.links}>  <a className={mobilemenucss.link} href={staticlinks.trackorder}>Track Order</a></li>
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
                            <MegaMenu key="mobilemenu" showpages />
                        </div>
                    </li>
                    <li className={mobilemenucss.links}> <a className={mobilemenucss.link} href={staticlinks.cart}>Cart</a></li>

                </ul>

            </div>
        </>
    )
}

export default MobileMenu