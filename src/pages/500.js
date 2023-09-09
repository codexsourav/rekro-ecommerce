import { Inter } from 'next/font/google';
import './style.css';
const inter = Inter({ subsets: ['latin'] })
function Custom404() {
    return (
        <>
            <div className={`${inter.className} error`}>
                <h1 className='title'>500</h1>
                <p>Internal Server Error</p>
            </div>
        </>
    )
}
export default Custom404