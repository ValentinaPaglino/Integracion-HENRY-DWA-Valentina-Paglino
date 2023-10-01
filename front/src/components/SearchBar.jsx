import { useState } from "react";
import styled from "styled-components";


const Buscar = styled.input`
width: 20rem;
height: 2rem;
margin-right: .5rem;
`

const Agregar = styled.button`
background-color: yellow;
font-weight: bold;
border: none;
height: 2rem;

&:hover {
  cursor:pointer;
  opacity: .6;
}
`

const SearchBar = (props) => {

const {onSearch} = props;

const [id, setId] = useState("")

const handleChange = (event) => {
  setId(event.target.value)
}

  return (
    <div>
        <Buscar type='search' placeholder="id..." value={id} onChange={handleChange}/>
          <Agregar onClick={() => onSearch(id)}>Agregar </Agregar> 
    </div>
  );
};

export default SearchBar;
