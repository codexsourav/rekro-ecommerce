import ProductList from "@/Components/Product/ProductList";
import PageWrapper from "../PageWrapper";
import ProductInfo from "./components/ProductInfo";
import ProductInfoTabs from "./components/ProductInfoTabs";
import ProductSlider from "./components/ProductSlider"
import styles from './style.module.css';
function Product() {
    return (
        <PageWrapper>
            <div className="container">
                <div className={styles.Productinfocontainer}>
                    <ProductSlider />
                    <ProductInfo />
                </div>
                <ProductInfoTabs />
            </div>
            <ProductList title={"Related products"} />
        </PageWrapper >
    )
}
export default Product