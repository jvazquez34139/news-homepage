import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }: { children: JSX.Element }) => {

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
      <body className='p-2 md:mx-auto font-sans md:w-[1440px]'>
        <div className=''>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout
