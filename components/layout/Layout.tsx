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
      <body className='flex p-1 font-sans'>
        <div className='w-[1440] m-auto'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout
