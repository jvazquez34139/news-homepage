import NavLink from "./NavLink";

const Nav = () => {
  const linkNames = ['Home', 'New', 'Popular', 'Trending', 'categories'];

  return (

    <nav className="w-full flex align-middle">
      <img src="/assets/images/icon-menu.svg" alt="hamburger menu" className="ml-auto my-auto h-7 w-14 md:hidden" />
      <ul className="md:flex md:ml-auto hidden md:w-auto md:auto">
        {linkNames.map((linkName, index) => (
          <NavLink key={index} linkName={linkName} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav