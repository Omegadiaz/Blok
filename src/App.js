import React, { useState, useEffect } from 'react';
import './App.css';

import Title from './Components/Tittle';
import NoteBody from './Components/NoteBody';




function App() {
  //Dejar que el usuario nombre el Blok
  document.title = 'Blok - Easy notes'

  
  //const [noteTitle, setnoteTitle] = useState('');
  console.log(typeof localStorage.getItem('notasLocal'));
  const [setCambiarTitulo] = useState(0);
  const [nombre] = useState(
    localStorage.getItem('user') || 'anónimo'
  );
  const [nota, setNota] = useState('');
  const [listaNotas, setListaNotas] = useState(
    JSON.parse(localStorage.getItem('notasLocal')) || []
  );
  useEffect(function(){
    
    localStorage.setItem('user', nombre);
    
   
  },[nombre])
  useEffect(function(){
    
    localStorage.setItem('notasLocal', JSON.stringify(listaNotas));
    setNota('')
  },[listaNotas])

const changeTitleHandler = () => (
  setCambiarTitulo(1)
)

function escribirNota (event) {
  let value = event.target.value
  setNota(value)
}

function guardarNota () {
  setListaNotas([...listaNotas, nota])
}


const BlocDeNotas = () => (
  listaNotas.map(
          (el)=> <li key={el + Math.random()}>{el}</li>
          )
    
    )

  
 function enter(e){
    if(e.keyCode === 13){
      guardarNota()
    }
  }

  return (
    <div className="container">
    <h1><a href="/#"><span className="badge badge-secondary" style={{marginRight:'0.3em'}}>Blok</span></a><span style={{fontSize: '0.7em'}}>de {nombre}</span></h1>
     <Title clicked={changeTitleHandler} title="Prueba de título" />
     <div>
     <NoteBody escribiendo={escribirNota.bind(this)} pulsarenter={enter.bind(this)} value={nota}
     />
     
     </div>
     <button className="btn btn-primary" onClick={guardarNota} style={{marginRight: '0.6em',width:'100px'}}>Guardar</button>
     <button className="btn btn-primary" onClick={() => setListaNotas([])} style={{width:'100px'}}>Limpiar</button>
     <div style={{marginTop:'1em'}}><label>Mis notas:</label>
       <ul className="list-unstyled" style={{marginTop: '2em'}}>
        <BlocDeNotas />
       </ul>
       </div>
     </div>
  );

  
}

export default App;
