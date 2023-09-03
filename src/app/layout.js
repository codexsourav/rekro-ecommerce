import { Providers } from './Provider'
import { Inter } from 'next/font/google'
import 'rc-slider/assets/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rekro | All Your Shopping Needs Met',
  description: '"Explore a World of Possibilities at Rekro - Your Ultimate Online Shopping Destination. Discover Trendy Fashion, Electronics, Home Essentials, and More. Shop Now for Quality Products at Unbeatable Prices!"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  )
}
