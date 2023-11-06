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
const Favorite = styled.button`
background-color: green;
color: white;
font-size: larger;
border: none;
border-radius: 5px;
margin-bottom: 1rem;
padding: 5px;
width: 12rem;


&:hover{
  cursor: pointer;
  opacity: 0.7;
`

const Detail = () => {
 const { id } = useParams();
const [character, setCharacter] = useState({});
const [isFavorite, setIsFavorite] = useState(false)



useEffect(() => {
   axios(`http://localhost:3001/character/${id}`).then(
      ({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);


 
const addFav = () => {
   character && character.origin && fetch('http://localhost:3001/favs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
         name: character.name,
         origin: character.origin.name, 
         species: character.species, 
         status: character.status, 
         gender: character.gender, 
         image: character.image
       }),
   })
   .then(()=>{
      setIsFavorite(true)
      
   })
   .catch(()=>{
      console.log('error');
   })

 
}


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
     <Favorite onClick={addFav}> {isFavorite ? 'Added to favorites' : '+ Add to favorites'}</Favorite>
</Details>
      )}
      
  </Contenedor>
  )
}

export default Detail;