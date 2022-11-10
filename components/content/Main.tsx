import React from 'react'

const Main = () => {
  return (
    <main className='mt-2 md:w-9/12 md:mr-10 md:mt-8'>
      <section>
        <img src="/assets/images/image-web-3-desktop.jpg" className='w-0 h-0 md:w-full md:h-72'></img>
        <img src="/assets/images/image-web-3-mobile.jpg" className="md:hidden"></img>
        <article className='md:flex md:mt-10'>
          <h1 className='font-bold text-5xl mt-4 md:mt-0 md:mr-14 md:font-bold md:text-7xl'>The Bright Future of Web 3.0?</h1>
          <div>
            <p className='mt-5 md:mt-0 md:text-lg'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?</p>
            <button className='mt-4 bg-red-400 text-white font-semibold tracking-[0.15em] p-2 px-9 uppercase md:mt-10 md:p-3 md:px-11 hover:bg-slate-900'>Read More</button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Main