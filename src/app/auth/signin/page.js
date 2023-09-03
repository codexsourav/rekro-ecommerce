"use client";

import { signIn } from 'next-auth/react';


function Login() {
    return (
        <div>
            <button onClick={async () => {
                var login = await signIn('credentials', {
                    username: "sourav",
                    password: "sourav",
                    redirect: true,
                    callbackUrl: "/"
                })
                console.log(login);

            }}>Login</button></div>
    )
}

export default Login