import React,{ChangeEvent, useRef, useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import st from './ListMessages.module.css'
import swal from 'sweetalert2'
import {message} from '../Helpers/messageInt'
import {getMessages} from '../../redux/actions'
import {RootReducer} from '../../redux/store';
type FormElement = React.FormEvent<HTMLFormElement>;
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type IRootState = ReturnType<typeof RootReducer>;
function ListMessages(): JSX.Element{
  const dispatch = useDispatch();
  const messages = useSelector<IRootState, message[]>(state => state.Messages);
  const [edit,setEdit] = useState<boolean>(false)
  
  function handlerSubmit(e: FormElement){
      e.preventDefault();
      
  }
  function handlerClick(id:string){

  }
  useEffect(()=>{
    dispatch(getMessages())
  },[dispatch])
  
  return (
    <div className={st.container}>
       <table className={st.table}>
         <thead>
           <tr>
             <th className={st.column1}>Nombre</th>
             <th className={st.column2}>Email</th>
             <th className={st.column3}>Fecha Enviada</th>
             <th className={st.column4}>Fecha actualización</th>
             <th className={st.column5}>Acciones</th>
           </tr>
         </thead>
         <tbody>
          {messages.map((mess:message,i:number) =><tr key={i}>
                <td className={st.column1}>{mess.name}</td>
                <td className={st.column2}>{mess.email}</td>
                <td className={st.column3}>{mess.createdAt}</td>
                <td className={st.column4}>{mess.updatedAt}</td>
                <td className={st.column5}><button className={st.button} onClick={()=>handlerClick(mess.messageid?mess.messageid:'')}>Ver</button></td>
            </tr>)}
         </tbody>
       </table>
    </div>
  );
}

export default ListMessages;

