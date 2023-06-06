import React from 'react';
import Banner from '../Organinms/Banner';
import imgClases from "../../image/img5.jpg"
import imgLudico from "../../image/img13.jpg"
import imgVideos from "../../image/img2.avif"
import atencionImg from "../../image/img6.jpg"
import concentracionImg from "../../image/img7.jpg"
import reforzamientoImge from "../../image/img9.jpg"
import aprendizajeImg from "../../image/img10.jpg"
import Marianela from "../../image/marianela.jpg"




const Home = () => {


  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Curso actual"
        }}
        title="Nuestra Filosofía y metodología JUEGA-DIVIERTETE-APRENDE genera el impacto emocional en los alumnos para consolidar el Aprendizaje."
        subtitle="EscoMath es un Centro de Alto Rendimiento Mental, donde a través de Un Proceso de Intervención Cognitiva Que logra Estimular los Circuitos Cerebrales que Codifican para un Mejor Rendimiento Académico."
        home
      />     

      <div className="ed-grid rows-gap s-grid-1 lg-grid-2 mb-3 pxy-4">
        <div className="s-rows-2">
          <article className="s-shadow-bottom">
            {/* Contenedor de la imagen */}
            <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
              <img src={imgLudico} />
            </div>
            {/* Contenido */}
            <div className="s-bg-white s-pxy-2">
              <h3>Programa de entrenamiento de aprendizaje lúdico</h3>
              <p className="s-mb-0">Cualquier ámbito de aprendizaje puede ser transformado en una gran y única
                experiencia educativa a través de la implementación de componentes lúdicos,
                generando la motivación de los estudiantes para aprender y mejorar. Usando materiales didácticos
                "Neuroeducativos" que son herramientas de intervención cognitiva adecuadas y que puede ser usado
                para cualquier estudiante. Tenemos:
                <ul>
                    <li>Sesiones a domicilio y también de reforzamiento escolar.</li>
                    <li>Clases interactivas particulares y en línea usando las mejores plataformas de matemáticas.</li>
                </ul>
              </p>
            </div>
            <footer className="s-cross-center s-bg-grey s-pxy-2 pb-4 s-radius-br s-radius-bl">
              {/* Define el ancho máximo de la imagen */}
              <div className="s-10 s-mr-1">
                {/* Contenedor de la imagen */}
                <div className="circle ">
                  <img src={Marianela} alt='Marianela' />
                </div>
                {/* Profesor */}
              </div>
              <p className="s-mb-0">Prof. Marianela Ruiz.</p>
              {/* Boton */}
              <a href='/contacto' className="button ghost s-to-right accent-color my-1">s/ 40</a>
            </footer>
          </article>
        </div>

        <div >
          <article className="s-shadow-bottom">
            {/* Póster y contenido */}
            <div className="ed-grid m-grid-5 s-gap-2 s-bg-white s-radius-tl s-radius-tr">
              {/* Contenedor de la imagen */}
              <div className="m-cols-2 img-container s-ratio-9-16 s-radius-tl s-radius-tr m-radius">
                <img src={imgClases} alt="Clases"/>
              </div>
              {/* Contenido */}
              <div className="s-pxy-2 m-pxy-0 m-cols-3">
                <h3>Asesorías, clases particulares, reforzamiento y aprendizaje</h3>
                <p className="s-mb-0">El Proceso de reforzamiento en el aprendizaje escolar sigue nuestra Metodología "Ludi Emoji Brain" y de donde través de la Identificación inicial del enfoque de Inteligencias Múltiples para consolidar su aprendizaje.
                </p>
              </div>
            </div>
            <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
              {/* Define el ancho máximo de la imagen */}
              <div className="s-10 s-mr-1">
                {/* Contenedor de la imagen */}
                <div className="circle ">
                  <img src={Marianela} alt='Marianela' />
                </div>
              </div>
              {/* Profesor */}
              <p className="s-mb-0">Prof. Marianela Ruiz</p>
              {/* Botón */}
              <a href='/contacto' className="button ghost s-to-right  accent-color my-1">s/ 25</a>
            </footer>
          </article>
        </div>

        <div>
        <article className="s-shadow-bottom">
            {/* Póster y contenido */}
            <div className="ed-grid m-grid-5 s-gap-2 s-bg-white s-radius-tl s-radius-tr">
              {/* Contenedor de la imagen */}
              <div className="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
                <img src={imgVideos} alt="videos"/>
              </div>
              {/* Contenido */}
              <div className="s-pxy-2 m-pxy-0 m-cols-3">
                <h3>Videos</h3>
                <p className="s-mb-0">
                Vídeos en nuestro canal de Youtube donde explicamos temas de álgebra, trigonometría, arimética y geometría para que aprendas y refuerces lo visto en clases.
                </p>
              </div>
            </div>
            <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
              {/* Define el ancho máximo de la imagen */}
              <div className="s-10 s-mr-1">
                {/* Contenedor de la imagen */}
                <div className="circle">
                  <img src={Marianela} alt='Marianela' />
                </div>
              </div>
              {/* Profesor */}
              <p className="s-mb-0">Prof. Marianela Ruiz</p>
              {/* Botón */}
              <a href='https://www.youtube.com/c/EscoMath/videos' className="button ghost s-to-right  accent-color my-1">Gratis</a>
            </footer>
          </article>
        </div>
      </div>

      <div style={{ background: "#ffff0099" }} className="p-5 mb-5">
        <div className="container">
          <p style={{ fontSize: "1.5rem", color: "black"}}>
            Para mejorar la educación podemos mostrar que hacer docencia puede ser un arte de prestigio capaz de revolucionar la forma de PENSAR y de APRENDER.
            Busco provocar un cambio con el sentido común en la enseñanza académica. Busco mostrar que se puede enseñar diferente. Partiendo de las necesidades de los estudiantes se estudian las estrategias necesarias para facilitar la calidad de entendimiento al momento de dar ejemplos con respectos a los contenidos.</p>

        </div>
      </div>

      <div className='s-center py-4'>
        <h4 className='text-center mb-5' style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#000" }}>Lo que hacemos</h4>
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">

          <article>
            <div className='s-px-4'>
              <div className="img-container circle s-mb-2">
                <img src={atencionImg} alt="atencionImg" />
              </div>
            </div>

            <div className='s-center'>
              <p className='t3 s-mb-1'>Nuestra filosofía</p>
              <p>Proceso Lúdico de Intervención Cognitiva</p>
            </div>
          </article>

          <article>
            <div className='s-px-4'>
              <div className="img-container circle s-mb-2">
                <img src={concentracionImg} alt="concentracionImg" />
              </div>
            </div>

            <div className='s-center'>
              <p className='t3 s-mb-1'>LUDI-EMOJI-BRAIN</p>
              <p>Cerebro -  emoción - juego - aprendizaje</p>
            </div>
          </article>

          <article>
            <div className='s-px-4'>
              <div className="img-container circle s-mb-2">
                <img src={reforzamientoImge} alt="reforzamientoImge" />
              </div>
            </div>

            <div className='s-center'>
              <p className='t3 s-mb-1'>Genera el impacto emocional</p>
              <p>Elevar niveles de atención, concentración y percepción Visual</p>
            </div>
          </article>

          <article>
            <div className='s-px-4'>
              <div className="img-container circle s-mb-2">
                <img src={aprendizajeImg} alt="aprendizajeImg" />
              </div>
            </div>

            <div className='s-center'>
              <p className='t3 s-mb-1'>Para consolidar el aprendizaje</p>
              <p>Basados en la Neuroeducación</p>
            </div>
          </article>
        </main>

        <a href="/servicios" className='button ghost accent-color my-1 big'>Ver más</a>

      </div>


    </>


  )
}

export default Home;
