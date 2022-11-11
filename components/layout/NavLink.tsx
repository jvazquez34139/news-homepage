
const NavLink = (props: { key: number, linkName: string }) => {
  const { linkName } = props;
  return (
    <li className='p-4 text-lg hover:text-red-400'><a href="#">{linkName}</a></li>
  )
}

export default NavLink