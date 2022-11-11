import Image from "next/image";
import NavLink from "./NavLink";

const Nav = (props: { toggleNav: Function, isNavOpen: Boolean }) => {
  const linkNames = ['Home', 'New', 'Popular', 'Trending', 'categories'];//to move to context file
  const { toggleNav, isNavOpen } = props;

  return (
    <nav className="w-full flex align-middle" onClick={(e) => toggleNav(e.target as HTMLElement)}>
      <Image src={`/assets/images/icon-menu.svg`} alt="hamburger menu" className="ml-auto my-auto h-7 w-14 md:hidden" />
      <ul className="md:flex md:ml-auto hidden md:w-auto md:auto">
        {linkNames.map((linkName, index) => (
          <NavLink key={index} linkName={linkName} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav