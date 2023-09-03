"use client";
import React, { useEffect, useState } from 'react'
import navcss from "./Styles/nav.module.css"
import Image from 'next/image';
import { HiOutlineShoppingCart, HiOutlineMagnifyingGlass, HiOutlineUser, HiBars3CenterLeft } from "react-icons/hi2";
import MobileMenu from './MobileMenu';
import DektopNavbar from './DektopNavbar';
import CartMenu from './CartMenu';
import SearchBox from './SearchBox';
function Navbar() {

    const [showNav, setshowNav] = useState(false);
    const [showcartbox, setshowcartbox] = useState(false);
    const [showsearchbox, setshowsearchbox] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const scrollThreshold = 70 + 35;

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const shouldHideNavbar = currentScrollPos > prevScrollPos && currentScrollPos > scrollThreshold;
        setPrevScrollPos(currentScrollPos);
        setVisible(!shouldHideNavbar);
    };

    const navtogle = (val) => {
        setshowNav(val);
    }
    const carttogle = (val) => {
        setshowcartbox(val);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <>

            <div className={navcss.topnav}>
                <p>Free delivery on orders over $1499. Don’t miss discount.</p>
            </div>
            <div className={`${navcss.navbar} ${visible ? navcss.visible : navcss.hidden}`}>
                <div className={`container ${navcss.nav}`}>

                    <div className={navcss.drowerbtndiv} >
                        <HiBars3CenterLeft size={35} className={navcss.drowerbtn} onClick={() => navtogle(true)} key="barsmenu" />
                    </div>
                    <div className={navcss.navimg}>
                        <Image alt='logo' src='/images/logo-b.png' width={120} height={35} className={navcss.setnavimg} />
                    </div>

                    <DektopNavbar />
                    <div className={navcss.options}>
                        <HiOutlineMagnifyingGlass size={22} className={navcss.option} onClick={() => setshowsearchbox(true)} />
                        <HiOutlineUser size={22} className={navcss.option} />
                        <div className={navcss.carticon} onClick={() => carttogle(true)}>
                            <HiOutlineShoppingCart size={22} className={navcss.option} />
                            <span className={navcss.cartcount}>1</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is menu mobile  */}
            <MobileMenu show={showNav} setnav={navtogle} />
            {/* this is cart */}
            <div className={` ${navcss.cartitembox} ${showcartbox ? navcss.opencartitembox : null}`} >
                <div className={navcss.cartoverlay}></div>
                <CartMenu toggle={carttogle} show={showcartbox} />
            </div>
            <div className={`${navcss.showsearchbox} ${showsearchbox ? navcss.activesearch : null}`}>
                <SearchBox onclose={setshowsearchbox} />
            </div>
        </>
    )
}

export default Navbar;