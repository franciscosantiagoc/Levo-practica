import React,{ChangeEvent, useRef, useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from 'react-icons/fa';
import st from './ListMessages.module.css'
import st2 from '../Register/Register.module.css'
import swal from 'sweetalert2'
import {message} from '../Helpers/messageInt'
import {getMessages,putMessages,delMessages,RESETMESS} from '../../redux/actions'
import {RootReducer} from '../../redux/store';
type FormElement = React.FormEvent<HTMLFormElement>;
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type IRootState = ReturnType<typeof RootReducer>;
function ListMessages(): JSX.Element{
  const dispatch = useDispatch();
  const noteInput = useRef<HTMLTextAreaElement>(null);
  const initialData = {
    name: '',
    email:'',
    message: ''
  }
  const messages = useSelector<IRootState, message[]>(state => state.Messages);
  const status = useSelector<IRootState, string>(state => state.status);
  const [data,setData] = useState<message[]>(messages)
  const [edit,setEdit] = useState<boolean>(false)
  const [editMess,setEditMess] = useState<message>(initialData)
  const [note,setNote] = useState<string>('')
  const [search,setSearch] = useState<string>('')
  const [error,setError] = useState<string>('')
  
  function handlerChange({ target: { name, value } }: HandleInputChange){
    //console.log('test', /[a-zA-Z0-9_ _-_,]$/.test(value))
    if(name==="note" && value && !/[a-zA-Z0-99áéíóúÁÉÍÓÚ_¿?!¡,.\- ]$/.test(value)){
      setError('Solo se admiten caracteres alfanuméricos y signos de puntuación')
    }else if(name==="search"){
      setSearch(value)
      filter(value)
    }else{
      setNote(value)
      setError('')
    }
  }

  function handlerSubmit(e: FormElement){
      e.preventDefault();
      if(edit){
        dispatch(putMessages({...editMess, note}))
        setEdit(false)
        setEditMess(initialData)
        setNote('')
        dispatch(getMessages())
      }else{
        swal.fire({title:'Error inesperado',text:'Debe seleccionar un mensaje para continuar', icon:'error'})
      }
  }
  function handlerCancel(e: React.FormEvent ){
    e.preventDefault();
    setEdit(false)
    setEditMess(initialData)
    setNote('')
  }
  function handlerClick(mess:message){
    setEdit(true)
    setEditMess(mess)
    noteInput.current?.focus();
  }
  async function handlerDel(id:string){
    await dispatch(delMessages(id))
    dispatch(getMessages())
  }

  function filter(value:string){
    let filt= messages.filter((mess:message)=>mess.name.includes(value)||mess.email.includes(value)||mess.message.includes(value)||mess.note?.includes(value))
    setData(filt)
  }

  useEffect(()=>{
    dispatch(getMessages())
  },[dispatch])

  useEffect(()=>{
    setData(messages)
  },[messages])
  useEffect(()=>{
    if(status==="success"){
      swal.fire({title:'Actualización exitosa', text: 'Acción realizada corretamente', icon:'success'}).then(()=>dispatch(RESETMESS()))
    }else if(status==="failed"){
      swal.fire({title:'Actualización fallida', text: 'Error al realizar la acción', icon:'error'}).then(()=>dispatch(RESETMESS()))  
    }
  },[status])

  useEffect(()=>{
    if(error){
      swal.fire({title:'Error inesperado', text:error,icon:'error'}).then(res=>setError(''))
    }
  },[error])
  
  return (
    <div className={st.container}>
      <div className={st.modal}>
        {edit?<form onSubmit={handlerSubmit} className={st2.contactForm}>
          <span className={st2.contactTitle}>Responder Mensaje</span>
          <div className={st2.formGroup}>
            <span>Nombre</span>
            <input type="text" name="name" placeholder='Ingrese su nombre' value={editMess.name} readOnly disabled={true}/>
          </div>
          <div className={st2.formGroup}>
            <span>Email</span>
            <input type="email" name="email" placeholder='Ingrese su email' value={editMess.email} readOnly disabled={true}/>
          </div>
          <div className={st2.formGroup100}>
            <span>Mensaje</span>
            <textarea name="message" placeholder='Ingrese su mensaje' value={editMess.message} readOnly disabled={true}/>
          </div>
          <div className={st2.formGroup100}>
            <span>Nota</span>
            <textarea name="note" placeholder='Ingrese una nota' value={note} onChange={handlerChange} ref={noteInput}/>
          </div>
          <div className={`${st2.formGroup100} ${st2.center}`}>
            <button type="submit" disabled={!note}>Enviar</button>
            <button onClick={handlerCancel}>Cancelar</button>
          </div>
        </form>:null}
      </div>
      <div className={`${st.center}`}>
        <input name="search" onChange={handlerChange} value={search} placeholder="Ingrese su búsqueda"/>
      </div>
       <table className={st.table}>
         <thead>
           <tr>
             <th className={st.column1}>Nombre</th>
             <th className={st.column2}>Email</th>
             <th className={st.column2}>Mensaje</th>
             <th className={st.column2}>Nota</th>
             <th className={st.column3}>Fecha Enviada</th>
             <th className={st.column4}>Fecha actualización</th>
             <th className={st.column5}>Acciones</th>
           </tr>
         </thead>
         <tbody>
          {data.map((mess:message,i:number) =><tr key={i}>
                <td className={st.column1}>{mess.name}</td>
                <td className={st.column2}>{mess.email}</td>
                <td className={st.column2}>{mess.message}</td>
                <td className={st.column2}>{mess.note?mess.note:''}</td>
                <td className={st.column3}>{mess.createdAt}</td>
                <td className={st.column4}>{mess.updatedAt}</td>
                <td className={st.column5}>
                  <button className={st.buttonE} onClick={()=>handlerClick(mess)}><FaEdit/></button>
                  <button className={st.buttonD} onClick={()=>handlerDel(mess.messageid?mess.messageid:'')}><FaTrash/></button>
                </td>
            </tr>)}
         </tbody>
       </table>
    </div>
  );
}

export default ListMessages;

