import React from 'react'
import youtube from "../../image/youtube.png"
import instagram from "../../image/instagram.png"
import blog from "../../image/blog.png"

const Footer = () => {
  return (
    <footer class="ed-footer s-bg-grey s-py-2">
      <div class="ed-grid lg-grid-3 s-grid-1">

        <nav className="nav lg-cols-3 s-cross-center ed-grid full">
          {/* Menú de navegación */}
          <ul className="menu s-main-distribute lg-to-center s-mb-0 s-pl-0 s-py-1" style={{listStyle: "none"}}>
            {/* Item de menú. Contiene link e ícono */}
            <li className="lg-mr-3">
              <a className="link s-column s-cross-center" href="https://www.youtube.com/c/EscoMath/videos"
               style={{width: "3rem"}} target='_blank'>
                {/* El ícono sólo se mostrará en la versión móvil */}                              
               <img src={youtube} alt="Youtube" />
              </a>
            </li>
            <li className="lg-mr-3">
              <a className="link s-column s-cross-center" href="https://www.instagram.com/esco.math/"
                style={{width: "3rem"}} target='_blank'>
               <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="lg-mr-3">
              <a className="link s-column s-cross-center" href="#"  style={{width: "3rem"}}>
                <img src={blog} alt="Blog" />
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
