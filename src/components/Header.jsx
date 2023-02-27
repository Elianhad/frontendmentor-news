import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/icon-menu.svg'
import NavMobile from './NavMobile'

const Header = ({ widthDevice }) => {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    if (widthDevice > 768) {
      setMenu(false)
    }
  }, [widthDevice])
  return (
    <header>
      <div className='bar'>
        <img src={logo} alt='logo' />
        <button className='bar-menu' onClick={() => setMenu(true)}>
          <img src={menuIcon} alt='menu' />
        </button>
        <nav className='nav-desktop'>
          <a href=''>Home</a>
          <a href=''>New</a>
          <a href=''>Popular</a>
          <a href=''>Trending</a>
          <a href=''>Categories</a>
        </nav>
        {menu && <NavMobile setMenu={setMenu} />}
      </div>
    </header>
  )
}

export default Header
