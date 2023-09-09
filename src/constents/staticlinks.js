import { CiViewList, CiUser, CiLocationOn, CiShoppingCart, CiLogout } from "react-icons/ci";

export const staticlinks = {
    home: "/home",
    newProducts: "/collection/new",
    shop: "/shop",
    trackorder: "/trackorder",
    cart: "/cart",
    auth: "/auth",
    product: "/product",
    search: "/search",
    collection: "/collection",
    checkout: "/checkout",
    account: "/account",
}

export const account_tablist = [
    { name: "DashBord", icon: CiViewList, link: "/account" },
    { name: "Account", icon: CiUser, link: "/account/updateinfo" },
    { name: "Address", icon: CiLocationOn, link: "/account/address" },
    { name: "My Orders", icon: CiShoppingCart, link: "/account/orders" },
    { name: "Logout", icon: CiLogout, link: "/account/logout" }
]