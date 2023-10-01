// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    background-color: white;
    width: 300px;
    margin: 4px;
    box-shadow: 2px 3px 3px rgb(0, 0, 0, 0.5);
    border-radius: 5px;
    position: relative;
    
   &:hover {
    width: 320px;
    box-shadow: 0 0 5px 5px rgb(255, 255, 255, 0.6); 
    transition: 0.1s;
    
   }
`
const BotonCerrar = styled.button`
border: none;
background-color: red;
position:absolute;
right: 0;

&:hover{
  cursor: pointer;
  opacity: 0.7;
}

&:active{
  background-color: crimson;
}
`


const Nombre = styled.h2`
background-color: yellow;
font-style: italic;
padding-left: 20px;
padding-right: 50px;
position: absolute;
top: 230px;
`
const Imagen = styled.img`
width: 100%;
`

const Detalles = styled.div`
padding: 0 1rem;
`

const Card = (props) => {
  const {id, onClose, name, status, species, gender, origin, image} = props;
  return (

    <CardContainer>
       <BotonCerrar onClick={()=>onClose(id)}>X</BotonCerrar>
       <Imagen src={image} alt='imagen' /> 
       
       <Link to={`/detail/${id}`} >
         <Nombre className="card-name">{name}</Nombre>
      </Link>

       
       <Detalles> 
          <h2>status: {status}</h2>
          <h2>species: {species}</h2>
          <h2>gender: {gender}</h2>
          <h2>origin: {origin}</h2>
       </Detalles>   
          
    </CardContainer>
  );
};

export default Card;
