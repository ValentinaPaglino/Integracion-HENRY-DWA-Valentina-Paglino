import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import { useState } from "react";
import axios from "axios";
import { Form, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./views/About";
import Detail from "./components/Detail";
import Formulario from "./components/Form";


function App() {

const [characters, setCharacters] = useState([])

function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡No hay personajes con este ID!');
     }
  });
}

const onClose = (id) =>{
  setCharacters(
characters.filter((char)=>{
  return char.id !== Number(id)
})
  )
}

  return (
    <>
      <Nav onSearch = {onSearch}/>
      <Routes>
        <Route path='/' element={<Formulario/>}/>
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      

      
    
    </>
  );
}

export default App;
