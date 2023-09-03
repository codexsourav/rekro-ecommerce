import Banner from './components/Banner';
import Collections from './components/collections';
import HeroSection from './components/HeroSection';
import ProductSlider from '@/Components/Product/ProductSlider';
import ProductList from '@/Components/Product/ProductList';
import PageWrapper from '../PageWrapper';
async function Home() {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);
    return (

        <>
            <PageWrapper>
                <HeroSection />
                <Collections />
                <ProductList title="TOP Products" />
                <Banner />
                <ProductSlider title="Featured ITEMS" />
                <ProductList title="New Arrivals" />
            </PageWrapper>
        </>

    )
}

export default Home