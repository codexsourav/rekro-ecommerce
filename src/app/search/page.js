"use client"
import { redirect } from 'next/navigation'
import ProductList from '@/Components/Product/ProductList';
import { useSearchParams } from 'next/navigation';
import PageWrapper from '../PageWrapper';
import styles from './styles/styles.module.css'

import Filterbox from '@/Components/Product/Filterbox';
function Search() {
    const searchParams = useSearchParams();
    const searchquery = searchParams.get('s');

    if (searchquery == null || searchquery.length == 0) {
        redirect('/home')
    }

    return (
        <>
            <PageWrapper>
                <div className="container">
                    <p className={styles.searchtitle}>
                        results: {searchquery}
                    </p>
                    <Filterbox />
                </div>
                <ProductList />

            </PageWrapper>

        </>
    )
}

export default Search