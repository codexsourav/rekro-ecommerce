import ProductList from '@/Components/Product/ProductList';
import PageWrapper from '../PageWrapper';
import Filterbox from '@/Components/Product/Filterbox';
function Shop() {
    return (
        <>
            <PageWrapper>
                <div className="container" style={{ marginTop: 50 }}>
                    <Filterbox />
                </div>
                <ProductList data={[]} />
            </PageWrapper>
        </>
    )
}

export default Shop