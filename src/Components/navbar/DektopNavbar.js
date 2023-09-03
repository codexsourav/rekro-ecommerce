"use client";
import Link from 'next/link';
import MegaMenu from './MegaMenu'
import navcss from "./Styles/desktopmenu.module.css"
import { HiOutlineChevronDown } from "react-icons/hi2";

function DektopNavbar() {
    return (
        <>

            <ul className={navcss.linkslist}>
                <li className={navcss.links}><Link className={navcss.link} href="/home">Home</Link></li>
                <li className={navcss.links}>  <Link className={navcss.link} href="/search?s=test">New Arrivals</Link></li>
                <li className={`${navcss.links} ${navcss.megamenucat}`}> <a className={navcss.link} href="#">Shop <HiOutlineChevronDown size={10} /></a>
                    <div className={navcss.megamenu}>
                        <MegaMenu key="desktopmenu" />
                    </div>
                </li>
                <li className={navcss.links}>  <a className={navcss.link} href="#">Offers</a></li>
                <li className={navcss.links}>  <a className={navcss.link} href="#">Track Order</a></li>
                <li className={`${navcss.links} ${navcss.megamenucat}`}> <a className={navcss.link} href="#">Pages <HiOutlineChevronDown size={10} /></a>
                    <div className={navcss.megamenu}>
                        <MegaMenu key="desktopmenu" />
                    </div>
                </li>
                <li className={navcss.links}> <a className={navcss.link} href="#">Cart</a></li>
            </ul>

        </>
    )
}

export default DektopNavbar