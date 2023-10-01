import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 90vh;
`

const Details = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
color: white;
width: fit-content;
padding: 3rem;
`

const Imagen = styled.img`
border-radius: 50%;
`

const Detail = () => {
 const { id } = useParams();
const [character, setCharacter] = useState({});


useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);
 


 console.log(character.origin)

  return (
   <Contenedor>
 {character && (
    <Details> 
      <Imagen src={character.image} />
      <h1>{character.name}</h1>
      <h2>STATUS: {character.status}</h2>
      <h2>SPECIES: {character.species}</h2>
      <h2>GENDER: {character.gender}</h2>
     {character.origin && <h2>ORIGIN: {character.origin.name}</h2>} 
    
</Details>
      )}
  </Contenedor>
  )
}

export default Detail;