import React, {createRef} from 'react';
import Logo from "../../image/logo-escomath3.png";
import { NavLink } from 'react-router-dom';

const menu = createRef()
const toggleMenu = () => {
  menu.current.classList.toggle('show')
}

const Header = () => {
  return (
    <>
      <header className='main-header'>
        <div className="ed-grid s-grid-5 lg-grid-4">
          {/* Div para el logo */}
          <div className='s-cols-4 lg-cols-1 s-cross-center'>
          <NavLink to="/">
            <img src={Logo} alt="escomath-logo" className='ed-logo' />
          </NavLink>
          </div>
          {/* div para el menu principal */}
          <div className='s-cols-1 lg-cols-3 s-cross-center s-main-end'>
            <nav className='main-menu' ref={menu}>
              <ul>
                <li><NavLink style={{textDecoration: "none"}} to="/">Inicio</NavLink></li>
                <li><NavLink style={{textDecoration: "none"}} to="/servicios">Servicios</NavLink></li>
                <li><NavLink style={{textDecoration: "none"}} to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink style={{textDecoration: "none"}} to="/videos">Videos</NavLink></li>
                {/* <li><NavLink style={{textDecoration: "none"}} to="/juegos">Juegos</NavLink></li> */}
                <li><NavLink style={{textDecoration: "none"}} to="/contacto">Contacto</NavLink></li>
              </ul>
            </nav>
            {/* menu  hamburguesa */}
            <div className='main-menu-toggle to-l'
            onClick={() => toggleMenu()}
            >
            </div>

          </div>
        </div>
      </header>
      <div className='l-block'></div>
      
    </>
  )
}

export default Header
