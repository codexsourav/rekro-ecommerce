"use client";

import { signIn, useSession } from 'next-auth/react';
import PageWrapper from '../PageWrapper';
import styles from './styles.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import validator from 'validator';
function AuthPage({ searchParams }) {
    const callbackurlpage = searchParams.callbackUrl;
    const [islogin, setislogin] = useState(true);
    const [loading, setloading] = useState(false);

    const [forminputs, setforminputs] = useState({ name: "", username: "", password: "" });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setforminputs({ ...forminputs, [name]: value });
    }

    const loginCheck = async () => {
        setloading(true);
        const result = await signIn('credentials', {
            username: forminputs.username,
            password: forminputs.password,
            redirect: false,
            callbackUrl: callbackurlpage == null || callbackurlpage == "/auth" ? "/" : callbackurlpage,
        });
        setloading(false);
        if (result.error == null) {
            window.location.href = result.url;
        } else {

            toast.info(' Invalid Username Or Password!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const signupuser = async () => {

        if (validator.isEmpty(forminputs.name) && validator.isEmpty(forminputs.username) && validator.isEmpty(forminputs.password)) {
            toast.info(' Please Fill All Inputs', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        setloading(true);
        const res = await axios.post("/api/auth/signup", {
            name: forminputs.name,
            email: forminputs.username,
            password: forminputs.password
        });
        setloading(false);

        if (res.data.hasOwnProperty('error')) {
            toast.info(res.data?.error, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        } else if (res.data?.success == true) {
            toast.success(' Your Account Is Created!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            loginCheck();
        } else {
            toast.error(' Sumthing Want Wrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


    }


    return (
        <PageWrapper>
            <div className="container">
                <div className={styles.authform}>
                    <div className={styles.tabs}>
                        <p className={`${styles.tab} ${islogin ? styles.active : null}`} onClick={() => setislogin(true)}>Login</p>
                        <p className={`${styles.tab}  ${!islogin ? styles.active : null}`} onClick={() => setislogin(false)}>Register</p>
                    </div>
                    <div className={styles.authinputform}>
                        {!islogin ? <div className="inpbox">
                            <label>Your Name</label>
                            <input type='text' className="input" placeholder='Your Name' name='name' onChange={handleInput} value={forminputs.name} />
                        </div> : null}
                        <div className="inpbox">
                            <label>Email ID</label>
                            <input type='text' className="input" placeholder='Your Email ID' name='username' onChange={handleInput} value={forminputs.username} />
                        </div>
                        <div className="inpbox">
                            <label>Password</label>
                            <input type='password' className="input" placeholder='Password' name='password' onChange={handleInput} value={forminputs.password} />
                        </div>
                        {islogin ? <a href="#" className={styles.fpass} >Forget Password?</a> : null}
                        {islogin ?
                            <button className={`primarybtnactive ${styles.authbtn} `} disabled={loading} onClick={loginCheck}>{loading ? "Loading.." : "Login"}</button> :
                            <button className={`primarybtnactive ${styles.authbtn} `} disabled={loading} onClick={signupuser} >{loading ? "Loading.." : "Register Now"}</button>
                        }

                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default AuthPage