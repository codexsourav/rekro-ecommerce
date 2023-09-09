"use client";
import { Provider } from "react-redux";
import store from "../Services/Store";
import { SessionProvider } from "next-auth/react";
export function Providers({ children }) {
    return <>
        <SessionProvider >
            <Provider store={store}>{children}</Provider>
        </SessionProvider>
    </>;
}