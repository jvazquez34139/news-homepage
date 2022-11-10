import React from 'react'

const Main = () => {
  return (
    <main className='mt-2'>
      <img src="/assets/images/image-web-3-desktop.jpg" className='w-0 h-0 md:w-64 md:h-64'></img>
      <img src="/assets/images/image-web-3-mobile.jpg" className="md:hidden"></img>
      <h1 className='font-bold text-5xl mt-4'>The Bright Future of Web 3.0?</h1>
      <p className='mt-5'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
        But is it really fulfilling its promise?</p>
      <button className='mt-4 bg-red-400 text-white font-semibold tracking-[0.15em] p-2 px-9 uppercase'>Read More</button>
    </main>
  )
}

export default Main