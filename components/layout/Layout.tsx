import { useState } from 'react'

import OpenNav from './OpenNav'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'



const Layout = ({ children }: { children: JSX.Element }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openNavStyles, setOpenNavStyles] = useState("w-full h-full bg-slate-700 absolute");

  const toggleNav = (target: HTMLElement) => {
    if (isNavOpen) {
      setIsNavOpen(false);
      setOpenNavStyles("w-full h-full sticky hidden");
    } else if (!isNavOpen && target.tagName === 'IMG') {
      setIsNavOpen(true);
      setOpenNavStyles("w-full h-full static");
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        {/* font link from public/assets/fonts */}
        <link href="/assets/fonts/Inter-VariableFont_slnt,wght.ttf" />
        <title>Frontend Mentor | News homepage</title>
        <meta name="description" content="Frontend Mentor | News homepage" />
      </Head>
      <body className='font-sans md:w-full md:relative'>
        <div className={`fixed w-full h-full z-[1] top-0 left-0 bg-black opacity-70 ${!isNavOpen ? "hidden" : ""}`}></div>
        <OpenNav toggleNav={toggleNav} openNavStyles={openNavStyles} />
        <div className='p-4 absolute md:w-[1440px] top-0 left-0 md:mx-auto'>
          <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
          {children}
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout
