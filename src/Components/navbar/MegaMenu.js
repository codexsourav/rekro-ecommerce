"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import menucss from "./Styles/menu.module.css"
import { useEffect, useState } from "react";
import axios from "axios";


function MegaMenu({ showpages = false }) {
    const ses = useSession()
    const [productCategories, setloadcolaction] = useState(null)


    useEffect(() => {
        if (!showpages) {
            var options = {
                method: 'GET',
                url: '/api/collection'
            };

            axios.request(options).then(function (response) {
                setloadcolaction(response.data)
            }).catch(function (error) {
                setloadcolaction([]);
            });
        }
    }, [])


    return (
        <>
            {
                !showpages ? <div className={menucss.menu}>
                    {productCategories == null ? (<div className={menucss.item}>
                        <p className={menucss.title}>Loading..</p >
                    </div>) : productCategories.map((e, index) => {
                        return (<div className={menucss.item} key={'menu-' + index}>
                            <a href={"/collection/" + e.title} className={menucss.title}>{e.title}</a >
                        </div>)
                    })}
                </div> :

                    <div className={menucss.menu}>
                        <div className={menucss.item} >
                            <a className={menucss.title} href="/account/orders" >My Orders</a >
                        </div>
                        <div className={menucss.item} >
                            <a className={menucss.title} href="/checkout">Checkout</a>
                        </div>
                        <div className={menucss.item} >
                            <a className={menucss.title} href="/contact">Contat US</a>
                        </div>

                        {ses.status == "loading" ? null : ses.status == "authenticated" ? (<>

                            <div className={menucss.item} >
                                <a className={menucss.title} href="/account">My Account</a>
                            </div>
                            <div className={menucss.item} >
                                <p className={menucss.title} onClick={signOut}>Logout</p>
                            </div>
                        </>)
                            :
                            <div className={menucss.item} >
                                <p className={menucss.title} onClick={signIn}>Login</p>
                            </div>}


                    </div >
            }
        </>
    )
}

export default MegaMenu