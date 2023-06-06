import React from 'react'
import Banner from "../Organinms/Banner"
import Innovacion from '../../image/img9.jpg'
import MCD from '../../image/M.C.D.png'
import FuncionLineal from '../../image/function-linear.png'
import MCM from '../../image/m.c.m-por-descomposicion-simultanea.png'
import ExponentesSucesivos from '../../image/Potenciacion-exponentes-sucesivos.png'
import RaizDeUnProducto from '../../image/radicacion-raiz-de-un-producto2.png'
import MultiplicacionDeRadicales from '../../image/multiplicacion-de-radicales-igual-indice.jpg'


const Videos = () => {
  return (
    <div>
      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Curso actual"
        }}
        title="| Videos |"
        subtitle="EscoMath es un Centro de Alto Rendimiento Mental, donde a través de Un Proceso de Intervención Cognitiva Que logra Estimular los Circuitos Cerebrales que Codifican para un Mejor Rendimiento Académico."
      />

      <main className='ed-grid m-grid-3'>
        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=LA4IYKkDU6g&t=69s" target='_blank'>
              <img src={MultiplicacionDeRadicales} alt="MultiplicacionDeRadicales" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Multiplicación de Radicales</h3>
          </div>
        </article>

        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=x3gBFc14FeI&t=50s" target='_blank'>
              <img src={RaizDeUnProducto} alt="RaizDeUnProducto" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Radicación: RAÍZ DE UN PRODUCTO</h3>
          </div>
        </article>

        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=ajIANA6YUnU&t=550s" target='_blank'>
              <img src={ExponentesSucesivos} alt="ExponentesSucesivos" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Potenciación - EXPONENTES SUCESIVOS</h3>
          </div>
        </article>

        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=_sTCDUjeJwA" target='_blank'>
              <img src={MCM} alt="MCM" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Mínimo común múltiplo(m.c.m) - Por descomposición simultánea</h3>
          </div>
        </article>

        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=2PXAZszmYJ4" target='_blank'>
              <img src={MCD} alt="MCD" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Máximo común divisor(M.C.D) - Por descomposición Simultánea</h3>
          </div>
        </article>

        <article className='card s-border'>
          <div className="imag-container s-ratio-16-9">
            <a href="https://www.youtube.com/watch?v=xGJ2xjezsuo" target='_blank'>
              <img src={FuncionLineal} alt="Funcion lineal" />
            </a>

          </div>
          <div className="card__data s-pxy-2">
            <h3 className='t4 center'>Gráfica de una función lineal sin tabla de valores</h3>
          </div>
        </article>
      </main>
      <div className='s-center py-4'>
        <a href="https://www.youtube.com/c/EscoMath/videos" target='_blank' className='button ghost accent-color my-1 big'>Ver más videos</a>
      </div>


    </div>


  )
}

export default Videos;
