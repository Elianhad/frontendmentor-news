import imgClose from '../assets/images/icon-menu-close.svg'
const NavMobile = ({ setMenu }) => {
  return (
    <div className='container-menu-mobile'>
      <button className='button-close' onClick={() => setMenu(false)}>
        <img src={imgClose} alt='boton cerrar' />
      </button>
      <nav className='nav-mobile'>
        <a href=''>Home</a>
        <a href=''>New</a>
        <a href=''>Popular</a>
        <a href=''>Trending</a>
        <a href=''>Categories</a>
      </nav>
    </div>
  )
}

export default NavMobile
