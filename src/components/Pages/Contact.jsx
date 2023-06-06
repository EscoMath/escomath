import React from 'react';


const registration = event => {
  event.preventDefaul();
}

const Contact = () => {
  return (
    <div className='ed-grid lg-grid-2 s-grid-1 s-py-4'>
      <div className='l-block s-py-4'>
        <div>
          <h4 className='s-center'>Asesorias y Clases  Interactivas de Matemáticas</h4>
          <p>A través de un Proceso Lúdico de Intervención Cognitiva Logramos Estimular los Procesos Mentales del Cerebro que asocian para La Atención y Concentración, Estas actividades logran elevar los niveles de Atención Sostenida, Atención a Demandas Múltiples, Percepción Visual entre otros hacia niveles Ideales y Optimos.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" alt="profesor"
          />
        </div>
      </div>

      <div className='m-to-center m-25 lg-75 s-py-3'>
        <h2 className='center s-mb-4'>Contactanos</h2>

        {/* <form onSubmit={registration.bind()}>
          <div className='form__item'>
            <label htmlFor="name" style={{ width: "100%" }}>
              Nombre
              <input type="text" id='names' placeholder='Ingresa tu nombre' />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor="email" style={{ width: "100%" }}>
              Correo electrónico
              <input type="email" id='email' placeholder='Ingresa tu email' />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor="phone" style={{ width: "100%" }}>
              Teléfono
              <input type="number" id='phone' placeholder='Ingresa tu número de teléfono' />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor="text" style={{ width: "100%" }}>
              Mensaje
              <textarea name="text" id="text" cols="30" rows="10" placeholder='Ingresa tu mensaje'></textarea>
            </label>
          </div>

          <div className='form__item'>
            <input type="submit" className='button accent-color full' value="Enviar" />
          </div>

        </form> */}

        <p>Envia tu correo a <strong><i>escomath.latam@gmail.com</i></strong> para màs informaciòn. Envia tus sugerencias o cualquier aporte que desees.</p>


      </div>
    </div>
  )
}

export default Contact
