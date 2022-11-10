import React from 'react'

const OpenNav = (props: { toggleNav: Function, openNavStyles: string }) => {
  const { toggleNav, openNavStyles } = props;

  const linkNames = ['Home', 'New', 'Popular', 'Trending', 'categories'];


  return (
    <div className={`fixed z-[2] top-0 left-0 ${openNavStyles}`} onClick={(e) => { toggleNav(e.target as HTMLElement) }}>
      <nav className='w-60 ml-auto h-full bg-white p-4 opacity-100'>
        <img src={`/assets/images/icon-menu-close.svg`} alt="hamburger menu" className="ml-auto my-auto h-10 w-10 md:hidden" />
        <ul className='mt-24'>
          {linkNames.map((linkName, index) => (
            <li key={index} className="text-2xl p-3">{linkName}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default OpenNav