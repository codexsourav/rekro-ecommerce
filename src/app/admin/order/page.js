"use client"
import OrderView from "@/app/account/orders/OrderView"
import AdminWrapper from "../components/AdminWrapper"
import { Container, Form } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

function Order() {
    const ses = useSession();

    const orderType = ["Place Order", "Shipped", "Out Of Delivery", "Cancel Order"];
    const [orderfld, setOrderfld] = useState("Place Order");
    const [orderdata, setorderdata] = useState(null)
    const loadData = async (v) => {
        console.log(v);
        setOrderfld(v);
    }


    useEffect(() => {


        if (ses.status != "loading") {
            setorderdata(null);
            var options = {
                method: 'GET',
                url: '/api/orders/' + orderfld,
                headers: {
                    Authorization: ses.data.user?.token,
                }
            };


            axios.request(options).then(function (response) {
                if (response.data.error) {
                    setorderdata([]);
                } else {
                    setorderdata(response.data);
                }
            }).catch(function (error) {
                console.log(error);
                setorderdata([]);
            });
        }

    }, [orderfld, ses])

    console.log(orderdata);

    return (
        <div>
            <AdminWrapper />
            <Container>
                <div className="mt-4 mb-4" style={{ width: "180px" }}>
                    <Form.Select onChange={(e) => loadData(e.target.value)} >
                        {orderType.map((e, i) => {
                            return <option key={"inp=" + i} >{e}</option>
                        })}
                    </Form.Select>
                </div>


                {
                    orderdata == null ? <p className="text-center mt-5">Loading...</p> : orderdata.length == 0 ? <p className="text-center mt-5">No Order Found</p> :
                        orderdata.map((e, i) => {
                            return <OrderView showaction={false} key={"orderid-" + i} />

                        })
                }
            </Container>
        </div>
    )
}
export default Order