"use client";
import Services from '@/Components/services/Services';
import Banner from './components/Banner';
import BestSells from './components/bestSells';
import Collections from './components/collections';
import HeroSection from './components/HeroSection';
import ProductSlider from './components/ProductSlider';



function Home() {


    return (

        <>
            <HeroSection />
            <Collections />
            <BestSells />
            <Banner />
            <ProductSlider />
            <Services />
        </>

    )
}

export default Home