import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full flex h-20 mb-4'>
      <img src="/assets/images/logo.svg" className='h-10 my-auto' />
      <Nav />
    </header>
  )
}

export default Header