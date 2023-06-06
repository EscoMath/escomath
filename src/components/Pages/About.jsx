import React from 'react'
import Banner from '../Organinms/Banner';
import img from '../../image/img3.jpg'
import mision from '../../image/mision.png'
import vision from '../../image/vision.png'

const About = () => {
  return (
    <div>
      <Banner
        color="accent-color"
        image={{
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
          alt: "Curso actual"
        }}
        title="| ¿Quién Soy? |"
        subtitle="EscoMath es un Centro de Alto Rendimiento Mental, donde a través de un Proceso de Intervención Cognitiva que logra estimular los circuitos cerebrales para Lograr un Mejor Rendimiento Académico."
      />     

      <section className='container'>
        <div class="ed-grid lg-grid-3 lg-60 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom">
          <div class="s-ratio-16-9 lg-ratio-2-3 s-bg-blue s-mb-2 lg-mb-0">
            <img src={img} alt="Nosotros" />
          </div>
          <div class="lg-cols-2">
            <h3>Un poco sobre mi</h3>
            <p>Apasionada a la matemática, o así me entiendo. Hay muchas cosas que no caben en nuestras aulas; de eso y otras locuras va un poco lo que les presento. El enseñar me ha mostró el alcance multidimensional, el poder y el impacto de la educación sobre todo el cómo a través de juegos se puede enseñar y desarrollar habilidades a los niños para que descubran, se diviertan y se emocionen aprendiendo. De eso se trata este proyecto, entender que algo puedo cambiar y contribuir en la formación de nuestros estudiantes porque para mejorar la educación podemos mostrar que hacer docencia puede ser un arte de prestigio capaz de revolucionar la forma de PENSAR y de APRENDER. Busco provocar un cambio con el sentido común en la enseñanza académica. Busco mostrar que se puede enseñar diferente. Es por eso, que Inspirada por estas ideas y el éxito de mi taller de "la emoción del juego en la enseñanza" en San Cristóbal-Venezuela, decido crear <b>EscoMath</b>, un Centro de Alto Rendimiento Mental, donde a través de un Proceso de intervención cognitiva mediante el juego, logramos estimular los circuitos cerebrales para lograr un mejor rendimiento académico en nuestros niños. ¡Bienvenidos!</p>
            <a href="/contacto" className='button ghost accent-color'>Puedes comenzar a aprender</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
