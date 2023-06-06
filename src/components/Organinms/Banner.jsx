import React from 'react'
import imgBanner from "../../image/banner.jpg"



const Banner = ({ color, image, title, subtitle, home }) => {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="ed-grid">
        <div>
          <img src={image.src}
            alt={image.alt}
            className='main-banner__img'
           />
           
          {
            home ?
            <div className='ed-grid m-grid-2'>
              <div className="main-banner__data">
                <h1 className='main-banner__title'>{title}</h1><br />
                <p><b>{subtitle}</b></p><br />
                <a href="/servicios" className='button ghost accent-color my-1'>Ver más</a>
              </div>

              <div className="img-container s-ratio-16-9">
                <img src={imgBanner} alt={image.alt} />
              </div>
            </div>
            :
            <div className="main-banner__data s-center">
              <h1 className='main-banner__title'>{title}</h1>
              <p>{subtitle}</p>
            </div>
          }
        </div>
      </div>
      
    </div>
  )
}
    

export default Banner
