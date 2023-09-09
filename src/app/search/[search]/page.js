"use client"
import { redirect } from 'next/navigation'
import ProductList from '@/Components/Product/ProductList';
import PageWrapper from '../../PageWrapper';
import Filterbox from '@/Components/Product/Filterbox';
function Search({ params }) {
    const searchParams = params.search;

    return (
        <>
            <PageWrapper>
                <div className="container" >
                    <p className="pagetitletext">
                        results: {searchParams}
                    </p>
                    <Filterbox />
                </div>
                <ProductList />
            </PageWrapper>
        </>
    )
}

export default Search