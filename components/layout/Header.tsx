import Nav from './Nav';
import { useState } from 'react';

const Header = (props: { toggleNav: Function, isNavOpen: Boolean }) => {
  const { toggleNav, isNavOpen } = props;

  return (
    <header className='w-full flex h-16 mb-4'>
      <img src="/assets/images/logo.svg" className='h-9 my-auto' />
      <Nav toggleNav={toggleNav} isNavOpen={isNavOpen} />
    </header>
  )
}

export default Header