import Navbar from '@/Components/navbar/navbar'

import Discountbanner from './home/components/Discountbanner'
import Services from '@/Components/Others/Services'
import Subescribe from '@/Components/Others/Subescribe'
import Fotter from '@/Components/Others/fotter'

function PageWrapper({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Discountbanner />
            <Services />
            <Subescribe />
            <Fotter />
        </>
    )
}

export default PageWrapper