import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import Title from './Components/Tittle';
import NoteBody from './Components/NoteBody';




function App() {
  //Dejar que el usuario nombre el Blok
  document.title = 'Blok - Easy notes'

  const [noteTitle, setnoteTitle] = useState('');
  const [nombre, setNombre] = useState('Gaby');
  const [cambiarTitulo, setCambiarTitulo] = useState(0);
  const [nota, setNota] = useState('');
  const [listaNotas, setListaNotas] = useState([]);

  useEffect(function(){
    //console.log('Se ha actualizado la lista ' + listaNotas)
   
  },[listaNotas])

const changeTitleHandler = () => (
  setCambiarTitulo(1)
)

function escribirNota (event) {
  let value = event.target.value
  setNota(value)
}

function guardarNota () {
  let guardarYBorrar = () => setListaNotas([...listaNotas, nota]) + setNota('')
  guardarYBorrar()
  //console.log(listaNotas);
}

const BlocDeNotas = () => (
    listaNotas.map(
          (el)=> <li key={el + Math.random()}>{el}</li>
          )
    
    )
//PARTE DEL TUTORIAL DE LocalStorage
    
  /*  const Storage = () => {
      const [value, setValue] = React.useState(
        localStorage.getItem('myValueInLocalStorage') || ''
      );
 
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
 
  const onChange = event => setValue(event.target.value);
 
  return (
        <div>
         
     
          <input value={value} type="text" onChange={onChange.bind(this)} />
     
          <p>{value}</p>
        </div>
      );
    };
  */ 
  
 function enter(e){
    if(e.keyCode === 13){
      guardarNota()
    }
  }

  return (
    <div className="container">
    <h1><a href="#"><span className="badge badge-secondary" style={{marginRight:'0.3em'}}>Blok</span></a><span style={{fontSize: '0.7em'}}>de {nombre}</span></h1>
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
     {/*<Storage />*/}
     </div>
  );

  
}

export default App;
