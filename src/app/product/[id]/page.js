import ProductList from "@/Components/Product/ProductList";
import PageWrapper from "../../PageWrapper";
import ProductInfo from "../components/ProductInfo";
import ProductInfoTabs from "../components/ProductInfoTabs";
import ProductSlider from "../components/ProductSlider"
import styles from '../style.module.css';
import axios from "axios";
async function Product({ params }) {
    var options = {
        method: 'GET',
        url: process.env.HOST_URL + '/api/product/' + params.id,
    };

    try {
        const data = await axios.request(options);
        return (
            <PageWrapper>
                <div className="container">
                    <div className={styles.Productinfocontainer}>
                        <ProductSlider data={data.data?.product} />
                        <ProductInfo data={data.data?.product} reviews={data.data?.reviews.length ?? 0} />
                    </div>
                    <ProductInfoTabs id={data.data?.product._id} desc={data.data?.product.desc} reviews={data.data?.reviews} />
                </div>
                <ProductList title={"Related products"} data={data.data.featured} />
            </PageWrapper >
        )
    } catch (error) {
        <PageWrapper>
            <h1>Some Error !! </h1>
        </PageWrapper >
    }


}
export default Product