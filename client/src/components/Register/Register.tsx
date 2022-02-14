import React,{ChangeEvent, useRef, useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import st from './Register.module.css'
import swal from 'sweetalert2'
import {message} from '../Helpers/messageInt'
import {postMessage} from '../../redux/actions'
type FormElement = React.FormEvent<HTMLFormElement>;
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function Register(): JSX.Element{
  const dispatch = useDispatch();
  const messInput = useRef<HTMLTextAreaElement>(null);
  const initialData = {
    name: '',
    email:'',
    message: ''
  }
  const [data,setData] = useState<message>(initialData)
  const [error,setError] = useState<string>('')

  function handlerChange({ target: { name, value } }: HandleInputChange){
    //console.log('test', /[a-zA-Z0-9_ _-_,]$/.test(value))
    if(name === 'name' && value && !/[a-zA-Z0-99áéíóúÁÉÍÓÚ_\ ]$/.test(value)){
      setError('Solo se admiten caracteres alfanuméricos')
    }else if(name === 'message' && value && !/[a-zA-Z0-9áéíóúÁÉÍÓÚ_¿?!¡,.\- ]$/.test(value)){
      setError('Solo se admiten caracteres alfanuméricos y signos de puntuacion')
    }else if(name === 'email' && value && !/[a-zA-Z0-9áéíóúÁÉÍÓÚ.-_]$/.test(value)){
      setError('Solo se admiten caracteres alfanuméricos y signos de puntuacion')
    }else{
      setData({
        ...data,
        [name]:value
      })
      setError('')
    }
  }
  
  function handlerSubmit(e: FormElement){
      e.preventDefault();
      dispatch(postMessage(data))
      setData(initialData)
      messInput.current?.focus();
  }
  useEffect(()=>{
    if(error){
      swal.fire({title:'Error inesperado', text:error,icon:'error'}).then(res=>setError(''))
    }
  },[error])
  
  return (
    <div className={st.container}>
      <form onSubmit={handlerSubmit} className={st.contactForm}>
        <span className={st.contactTitle}>Contactanos</span>
        <div className={st.formGroup}>
          <span>Nombre</span>
          <input type="text" name="name" placeholder='Ingrese su nombre' value={data.name} onChange={handlerChange}/>
        </div>
        <div className={st.formGroup}>
          <span>Email</span>
          <input type="email" name="email" placeholder='Ingrese su email' value={data.email} onChange={handlerChange}/>
        </div>
        <div className={st.formGroup100}>
          <span>Mensaje</span>
          <textarea name="message" placeholder='Ingrese su mensaje' value={data.message} onChange={handlerChange}  autoFocus ref={messInput}/>
        </div>
        <div className={`${st.formGroup100} ${st.center}`}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

