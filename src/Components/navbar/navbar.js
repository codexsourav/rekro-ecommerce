"use client";
import React, { useEffect, useState } from 'react'
import navcss from "./Styles/nav.module.css"
import Image from 'next/image';
import { HiOutlineShoppingCart, HiOutlineMagnifyingGlass, HiOutlineUser, HiBars3CenterLeft } from "react-icons/hi2";
import MobileMenu from './MobileMenu';
import DektopNavbar from './DektopNavbar';
import CartMenu from './CartMenu';
import SearchBox from './SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { setcarttoogle, setdrawer, setsearchbox } from '@/Services/menutoggle/toogle';
import { staticlinks } from '@/constents/staticlinks';

function Navbar() {
    const dispatch = useDispatch();
    const toogle = useSelector((state) => state.toogle);
    const cart = useSelector((state) => state.cart);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const scrollThreshold = 70 + 35;
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const shouldHideNavbar = currentScrollPos > prevScrollPos && currentScrollPos > scrollThreshold;
        setPrevScrollPos(currentScrollPos);
        setVisible(!shouldHideNavbar);
    };


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
                        <HiBars3CenterLeft size={35} className={navcss.drowerbtn} onClick={() => dispatch(setdrawer(true))} key="barsmenu" />
                    </div>
                    <a href={staticlinks.home} className={navcss.navimg}>
                        <Image alt='logo' src='/images/logo-b.png' width={120} height={35} className={navcss.setnavimg} />
                    </a>

                    <DektopNavbar />
                    <div className={navcss.options}>
                        <HiOutlineMagnifyingGlass size={22} className={navcss.option} onClick={() => dispatch(setsearchbox(true))} />
                        <a href={staticlinks.account}>  <HiOutlineUser size={22} className={navcss.option} /></a>
                        <div className={navcss.carticon} onClick={() => dispatch(setcarttoogle(true))}>
                            <HiOutlineShoppingCart size={22} className={navcss.option} />
                            <span className={navcss.cartcount}>{cart.products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is menu mobile  */}
            <MobileMenu />
            {/* this is cart */}
            <div className={` ${navcss.cartitembox} ${toogle.carttoggle ? navcss.opencartitembox : null}`} >
                <div className={navcss.cartoverlay}></div>
                <CartMenu />
            </div>
            <div className={`${navcss.showsearchbox} ${toogle.searchbox ? navcss.activesearch : null}`}>
                <SearchBox />
            </div>
        </>
    )
}

export default Navbar;