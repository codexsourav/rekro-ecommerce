import Filterbox from "@/Components/Product/Filterbox";
import PageWrapper from "../../PageWrapper";
import ProductList from "@/Components/Product/ProductList";

function Collection({ params }) {

    return (
        <PageWrapper>
            <div className="container" style={{ marginTop: 50 }} >
                <Filterbox />
            </div>
            <ProductList />
        </PageWrapper>
    )
}
export default Collection