"use client";
import Image from "next/image"
import PageWrapper from "../PageWrapper"
import Addressform from "../account/address/Addressform"
import styles from './style.module.css'
import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import { useSelector } from "react-redux";
import validator from 'validator'
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import axios from "axios";
import { redirect } from "next/navigation";
import Router from "next/router";
function Checkoutt() {
    const cart = useSelector(state => state.cart);
    const address = useSelector(state => state.address.address);
    const [orderType, setOrderType] = useState('PrePaid');
    const [disable, setdisable] = useState(false);
    const ses = useSession();


    let totalprice = 0;
    let qwt = 0;
    for (let i = 0; i < cart.products.length; i++) {
        totalprice += (cart.products[i].sellprice * cart.products[i].qut);
        qwt += cart.products[i].qut;
    }



    const payoptions = {
        key: "rzp_test_0bswBBJkXmLbt3",
        amount: totalprice + "00",
        currency: "INR",
        name: "REKRO SHOP",
        description: "Make Your Payment",
        image: "https://example.com/your_logo",

        handler: (res) => {
            makeOrder();
        },
        prefill: {
            name: address.fname + " " + address.lname,
            email: address.email,
            contact: address.phone,
        },
        notes: {
            address: "Rekro Shop Payment",
        },
        theme: {
            color: "#000",
        },
    };

    const [Razorpay] = useRazorpay();
    const handlePayment = useCallback(async () => {


        const rzpay = new Razorpay(payoptions);
        rzpay.on("payment.failed", function (response) {
            toast.error(response.error.description);
        });

        rzpay.open();
    }, [Razorpay]);

    function checkFieldsForEmptiness(fields) {
        const emptyFields = [];
        for (const key in fields) {
            if (fields.hasOwnProperty(key) && validator.isEmpty(fields[key])) {
                if (key == "company" || key == "line2") {

                } else {
                    emptyFields.push(key);
                }
            }
        }
        return emptyFields;
    }

    const handleOrder = () => {
        const emptyFields = checkFieldsForEmptiness(address);
        if (emptyFields.length > 0) {
            toast.error(`Please Enter ${emptyFields.join(', ')}`);
        } else {
            if (orderType == "PrePaid") {
                handlePayment();
            } else {
                makeOrder();
            }
        }
    }

    const makeOrder = () => {
        const neworder = cart.products.map((e, i) => {
            return {
                product_id: e._id,
                address: address,
                paymentType: orderType,
                color: e?.selectcolor ?? "Default",
                size: e?.selectsize ?? "Default",
                amount: e?.sellprice * e.qut,
                qut: e.qut,
            }
        });



        var options = {
            method: 'POST',
            url: '/api/order',
            headers: {
                Authorization: ses.data.user?.token,
                'Content-Type': 'application/json'
            },
            data: [
                ...neworder
            ]
        };
        setdisable(true);
        axios.request(options).then(function (response) {
            console.log(response.data);
            window.location.href = '/account/orders'
        }).catch(function (error) {
            setdisable(false);
            console.error(error);
        });
    }

    return (
        <PageWrapper showall={false}>
            <div className={styles.bgcolor}>
                <div className="container">
                    <div className={styles.checkoutform}>
                        <div className={styles.addressform}>
                            <h1 className={styles.formtitle}>Billing Details</h1>
                            <Addressform />
                        </div>
                        <div className="oderinfo">
                            <div className={styles.orderinfobox}>
                                <div className={styles.cartchackout}>
                                    <p className={styles.title}>Your Order</p>
                                    {cart.products.map((e, i) => {
                                        return <div className={styles.product} key={"cart_" + i}>
                                            <div className={styles.productinfo}>
                                                <a href={"/product/" + e._id}><Image alt="product" src={e.images[0]} width={80} height={80} style={{ objectFit: "cover" }} />
                                                </a>
                                                <div className={styles.pinfo}>
                                                    <p className={styles.producttitle}>{e.title}</p>
                                                    <p>₹{e.sellprice}.00</p>
                                                    <p>QUT : {e.qut} </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}


                                    <div >
                                        <div className={styles.info}>
                                            <p>Subtotal</p>
                                            <p>₹{totalprice}.00</p>
                                        </div>
                                        <div className={styles.info}>
                                            <p>Quantity</p>
                                            <p>{qwt}</p>
                                        </div>
                                        <div className={styles.info}>
                                            <p>Shipping Fee</p>
                                            <p>Free</p>
                                        </div>
                                        <div className={styles.info} style={{ fontWeight: 500 }}>
                                            <p>Total</p>
                                            <p>₹{totalprice}.00</p>
                                        </div>
                                    </div>
                                    <div className="inpbox">
                                        <label>Payment Methed</label>
                                        <select className="input" onChange={(e) => setOrderType(e.target.value)} >
                                            <option value="PrePaid" selected >Pay Online (UPI,BANK,Wallet,etc..)</option>
                                            <option value="cod" >Cash on Delivery</option>
                                        </select>
                                    </div>

                                    <button className='primarybtnactive' disabled={disable} onClick={handleOrder}>{disable ? "Process.." : "Place Order"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
export default Checkoutt