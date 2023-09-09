"use client"
import React, { useEffect, useState } from 'react';
import styles from '../style.module.css';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '@/Services/address/ManageAddress';
import { toast } from 'react-toastify';
import { indianStates } from '@/constents/country';
import validator from 'validator'
function Addressform() {
    const ses = useSession();
    const [loading, setloading] = useState(false);
    const formData = useSelector(state => state.address.address);
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(setAddress({
            ...formData, [name]: value,
        }))
    };

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

    const setAddressDB = () => {

        const emptyFields = checkFieldsForEmptiness(formData);

        if (emptyFields.length > 0) {
            toast.error(`Please Enter ${emptyFields.join(', ')}`);
        } else {
            var options = {
                method: 'PUT',
                url: '/api/address',
                data: formData,
                headers: {
                    Authorization: ses.data.user?.token,
                    'Content-Type': 'application/json'
                },
            };
            setloading(true)
            axios.request(options).then(function (response) {
                const data = response.data;
                setloading(false)

                if (data.update == true) {
                    toast.success(" Address Updated");
                } else {
                    toast.error(" Some Error On Updated Address!");
                }

            }).catch(function (error) {
                console.log(error);
                setloading(false)

                toast.error(" Some Error On Updated Address!");
            });

        }


    }

    useEffect(() => {

        if (ses.status == 'authenticated') {
            var options = {
                method: 'GET',
                url: '/api/address',
                headers: {
                    Authorization: ses.data.user?.token,
                    'Content-Type': 'application/json'
                },
            };

            axios.request(options).then(function (response) {
                const data = response.data;
                dispatch(setAddress({
                    fname: data?.fname ?? "",
                    lname: data?.lname ?? "",
                    company: data?.company ?? "",
                    country: data?.country ?? "india",
                    line1: data?.line1 ?? "",
                    line2: data?.line2 ?? "",
                    city: data?.city ?? "",
                    state: data?.state ?? "Andhra Pradesh",
                    zipCode: data?.zipCode ?? "",
                    email: data?.email ?? "",
                    phone: data?.phone ?? "",
                }))

            }).catch(function (error) {
                console.error(error);
            });
        }

    }, [ses]);

    return (
        <div className="updateaccountform">
            {/* First Name Input */}
            <div className={styles.towcolm}>
                <div className="inpbox">
                    <label>First Name</label>
                    <input
                        className="input"
                        name="fname"
                        value={formData.fname}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Last Name Input */}
                <div className="inpbox">
                    <label>Last Name</label>
                    <input
                        className="input"
                        name="lname"
                        value={formData.lname}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Company Input */}
            <div className="inpbox">
                <label>Company name (optional)</label>
                <input
                    className="input"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                />
            </div>

            {/* Country Input */}
            <div className="inpbox">
                <label>Country / Region</label>
                <select
                    className="input"
                    name="country"
                    onChange={handleInputChange}
                >
                    <option value="india" selected>India</option>
                    {/* Add other country options here */}
                </select>
            </div>

            {/* Street Address Inputs */}
            <div className="inpbox">
                <label>Street address</label>
                <input
                    className="input"
                    name="line1"
                    value={formData.line1}
                    placeholder="Address Line 1"
                    onChange={handleInputChange}
                />
                <input
                    className="input"
                    name="line2"
                    value={formData.line2}
                    placeholder="Address Line 2"
                    onChange={handleInputChange}
                />
            </div>

            {/* City Input */}
            <div className="inpbox">
                <label>Town / City</label>
                <input
                    className="input"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                />
            </div>

            {/* State Input */}
            <div className="inpbox">
                <label>State</label>
                <select
                    className="input"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                >
                    {indianStates.map((e, i) => {
                        return <option value={e} key={"ststes_" + i}>{e}</option>
                    })}

                    {/* Add other state options here */}
                </select>
            </div>

            {/* Zipcode Input */}
            <div className="inpbox">
                <label>Zipcode</label>
                <input
                    className="input"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                />
            </div>

            {/* Phone Number Input */}
            <div className={styles.towcolm}>
                <div className="inpbox">
                    <label>Phone Number</label>
                    <input
                        className="input"
                        name="phone"
                        type='number'
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Email Input */}
                <div className="inpbox">
                    <label>Email ID</label>
                    <input
                        className="input"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Save Button */}
            <button className="primarybtnactive" style={{ marginTop: 20 }} onClick={setAddressDB} disabled={loading}>
                {loading ? "Loading..." : "Save Your Address"}
            </button>
        </div>
    );
}

export default Addressform;
