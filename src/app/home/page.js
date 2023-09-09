import Banner from './components/Banner';
import Collections from './components/collections';
import HeroSection from './components/HeroSection';
import ProductSlider from '@/Components/Product/ProductSlider';
import ProductList from '@/Components/Product/ProductList';
import PageWrapper from '../PageWrapper';
import axios from 'axios';
async function Home() {
    var options = {
        method: 'GET',
        url: process.env.HOST_URL + '/api'
    };

    try {
        const data = await axios.request(options);

        return (

            <>
                <PageWrapper >
                    <HeroSection pagedata={data.data.home} />
                    <Collections pagedata={data.data.home} />
                    <ProductList title="TOP Products" data={data.data.top} />
                    <Banner pagedata={data.data.home} />
                    {data.data?.featured.length != 0 ? <ProductSlider title="Featured ITEMS" data={data.data.featured} /> : null}
                    <ProductList title="New Arrivals" data={data.data.new} />
                </PageWrapper>
            </>

        )
    } catch (error) {
        console.log(error);
        return (

            <>
                <PageWrapper>
                    <HeroSection />
                    <h1>Sumthing Want Wrong</h1>
                </PageWrapper>
            </>

        )
    }

}

export default Home