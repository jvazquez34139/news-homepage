import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full flex h-16 mb-4'>
      <img src="/assets/images/logo.svg" className='h-9 my-auto' />
      <Nav />
    </header>
  )
}

export default Header