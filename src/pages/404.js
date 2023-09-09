import { Inter } from 'next/font/google';
import './style.css';
const inter = Inter({ subsets: ['latin'] })
function Custom404() {
    return (
        <>
            <div className={`${inter.className} error`}>
                <h1 className='title'>404</h1>
                <p>Page Not Found</p>
                <a href="/">Go Home</a>
            </div>
        </>
    )
}
export default Custom404