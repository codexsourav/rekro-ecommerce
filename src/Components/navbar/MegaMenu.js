"use client";
import menucss from "./Styles/menu.module.css"


function MegaMenu() {
    const productCategories = [
        'Clothing',
        'Electronics',
        'Home and Kitchen',
        'Beauty',
        'Books',
        'Sports and Outdoors'
    ];
    return (
        <>

            <div className={menucss.menu}>
                {productCategories.map((e, index) => {
                    return <div className={menucss.item} key={'menu-' + index}>
                        <p className={menucss.title}>{e}</p >
                    </div>
                })}
            </div>

        </>
    )
}

export default MegaMenu