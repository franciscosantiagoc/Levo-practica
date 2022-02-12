import React from 'react';
import st from './Register.module.css'
type FormElement = React.FormEvent<HTMLFormElement>;


function Register(): JSX.Element{

  
  return (
    <div className={st.container}>
      <form onSubmit={handlerSubmit} className={st.contactForm}>
        <span className={st.contactTitle}>Contactanos</span>
        <div className={st.formGroup}>
          <span>Nombre</span>
          <input type="text" name="name" placeholder='Ingrese su nombre'/>
        </div>
        <div className={st.formGroup}>
          <span>Email</span>
          <input type="email" name="email" placeholder='Ingrese su email'/>
        </div>
        <div className={st.formGroup100}>
          <span>Mensaje</span>
          <textarea name="message" placeholder='Ingrese su mensaje'></textarea>
        </div>
        <div className={`${st.formGroup100} ${st.center}`}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;


function handlerSubmit(e: FormElement){
    e.preventDefault();
  }