import React from 'react';
import { useNavigate } from 'react-router-dom';

import st from './Home.module.css'
function Home(): JSX.Element{    
  const navigate = useNavigate()
  return (
    <div className={st.container}>
       <button onClick={()=>navigate('/register')}>Registro de Mensaje</button>
       <button onClick={()=>navigate('/list')}>Lista de Mensajes</button>
    </div>
  );
}

export default Home;

