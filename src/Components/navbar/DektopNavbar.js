import { staticlinks } from '@/constents/staticlinks';
import MegaMenu from './MegaMenu'
import navcss from "./Styles/desktopmenu.module.css"
import { HiOutlineChevronDown } from "react-icons/hi2";

function DektopNavbar() {
    return (
        <>

            <ul className={navcss.linkslist}>
                <li className={navcss.links}><a className={navcss.link} href={staticlinks.home}>Home</a></li>
                <li className={navcss.links}>  <a className={navcss.link} href={staticlinks.newProducts}>New Arrivals</a></li>
                <li className={`${navcss.links} ${navcss.megamenucat}`}> <a className={navcss.link} href={staticlinks.shop}>Shop <HiOutlineChevronDown size={10} /></a>
                    <div className={navcss.megamenu}>
                        <MegaMenu key="desktopmenu" />
                    </div>
                </li>
                <li className={navcss.links}>  <a className={navcss.link} href={staticlinks.trackorder}>Track Order</a></li>
                <li className={`${navcss.links} ${navcss.megamenucat}`}> <span className={navcss.link} >Pages <HiOutlineChevronDown size={10} /></span>
                    <div className={navcss.megamenu}>
                        <MegaMenu key="desktopmenu" showpages />
                    </div>
                </li>
                <li className={navcss.links}> <a className={navcss.link} href={staticlinks.cart}>Cart</a></li>
            </ul>

        </>
    )
}

export default DektopNavbar