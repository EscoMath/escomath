import React from 'react'
import Banner from "../Organinms/Banner"
import Atencion from '../../image/img8.jpg'
import Reforzamiento from '../../image/img5.jpg'
import Comunicacion from '../../image/img6.jpg'
import Neuroarqitectura from '../../image/img1.jpg'
import Capacitacion from '../../image/img10.jpg'
import Innovacion from '../../image/img9.jpg'
import AtencionIcon from '../../image/atencion-icon.avif'

const Servicios = () => {
  return (
    <div>
      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Curso actual"
        }}
        title="| Nuestros servicios |"
        subtitle="EscoMath es un Centro de Alto Rendimiento Mental, donde a través de Un Proceso de Intervención Cognitiva Que logra Estimular los Circuitos Cerebrales para Lograr un Mejor Rendimiento Académico."
      />

      <main className='ed-grid lg-grid-12 gap pxy-4'>
        <div className='course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block lg-cols-12' style={{ background: "#ffba42" }}>
          <div>
            <h3 className='t1' style={{ fontWeight: "bold" }}>¿Qué aprenderás?</h3>
          </div>
        </div>


        <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">
          <a href="#">
            {/* Contenedor de la imagen */}
            <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
              <img src={Atencion} alt="Atencion" />
            </div>
          </a>
          {/* Contenido */}
          <div class="s-bg-white s-pxy-2">
            <h3>Atención y Concentración</h3>
            <p class="s-mb-0">
              A través de un Proceso Lúdico de Intervención Cognitiva Logramos Estimular los Procesos Mentales del Cerebro que asocian para La Atención y Concentración, Estas actividades logran elevar los niveles de Atención Sostenida, Atención a Demandas Múltiples, Percepción Visual entre otros hacia niveles Ideales y Optimos
            </p>
          </div>


        </article>

        <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">
          <a href="#">
            {/* Contenedor de la imagen */}
            <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
              <img src={Reforzamiento} alt="Reforzamiento" />
            </div>
          </a>
          {/* Contenido */}
          <div class="s-bg-white s-pxy-2">
            <h3>Reforzamiento y Aprendizaje</h3>
            <p class="s-mb-0">
              El Proceso de Reforzamiento en el Aprendizaje Escolar sigue nuestra Metodología Ludi Emoji Brain y de Contextualización donde través de la Identificación Inicial del Enfoque de Inteligencias Multiples logramos diseñar un Programa Perzonalizado para cada Alumno.
            </p>
          </div>

        </article>

        <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">
          <a href="#">
            {/* Contenedor de la imagen */}
            <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
              <img src={Comunicacion} alt="Comunicacion" />
            </div>
          </a>
          {/* Contenido */}
          <div class="s-bg-white s-pxy-2">
            <h3>Comunicación</h3>
            <p class="s-mb-0">
              Este programa logra estimular los procesos Cognitivos Bases que asocian para el proceso de Comunicación Integral, esto incluye los procesos de Lecto-Escritura, Flujo Verbal, Comprensión y Atención para el Dominio de la Comunicación.
            </p>
          </div>

        </article>

        {/* <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">
         
          <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
            <img src={Neuroarqitectura} alt="Neuroarqitectura" />
          </div>
          
          <div class="s-bg-white s-pxy-2">
            <h3>Neuro Arquitectura</h3>
            <p class="s-mb-0">
              Servicio para Centros Educativos, a través del Desarrollo de Instrumentos Basados en el Neuro Aprendizaje logramos Disponer de herramientas que apoyen el Proceso de Aprendizaje Escolar usando las Fases APE (Aferente Sensorial, Procesamiento, y Eferente Motor) que tiene el Cerebro Biológicamente para generar un Aprendizaje Consolidado.
            </p>
          </div>

        </article> */}

        {/* <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">
        
          <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
            <img src={Capacitacion} alt="Capacitacion" />
          </div>
        
          <div class="s-bg-white s-pxy-2">
            <h3>Capacitacion</h3>
            <p class="s-mb-0">
              Contamos con Programas de Capacitación para Colegios orientados a Docentes, Psicologos y también Padres de Familia para que puedan ejercer actividades que aporten valor a los procesos cognitivos identificados como oportunidad para Mejorar en su alumnos e hijos.Este Programa de Capacitación basa los pilares fundamentales en la discplina de la Neurociencia, donde a través del estudio de como aprende el cerebro se puede lograr una estrategía sifgnificativa en el ámbito del aprendizaje. Contamos e integramos estas capacitaciones con materiales Ludicos y Digitales, exclusivos y diseñado por nuestro equipo de Investigación y Desarrollo.
            </p>
          </div>

        </article> */}

        {/* <article class="s-shadow-bottom card border border-3 border-warning lg-cols-4">          
          <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr card border-bottom border-3 border-warning">
            <img src={Innovacion} alt="Innovacion" />
          </div>
          
          <div class="s-bg-white s-pxy-2">
            <h3>Innovacion</h3>
            <p class="s-mb-0">
              Nuestro Equipo de Inovación y Desarrollo genera diversar herramientas Tecnológicas orientadas a la eficiencia del Aprendizaje. Entre Nuestras Herramientas contamos:

              - Aplicaciones en Software

              - DigiBrain Electronic Books ( Historias Electronicas Animadas)

              - Historias en Imagenes (Brain Books )

              - Material Lúdico
            </p>
          </div>

        </article>         */}
      </main>
    </div >
  )
}

export default Servicios
