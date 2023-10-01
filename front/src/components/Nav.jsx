import SearchBar from "./SearchBar";
import styled from "styled-components";
import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navegador = styled.nav`
display:flex;
justify-content: space-between;
background-color: grey;
padding: 10px;
`
const BotonNav = styled.button`
background-color: purple;
color:white;
font-weight: bold;
border: none;
height: 2rem;
border-radius: 4px;
margin-right: 1rem;

&:hover {
  cursor:pointer;
  opacity: .6;
}
`


const Nav = (props) => {
  const location = useLocation();

  if (location.pathname != '/'){
  return (
    <div>
        <Navegador>
        
        <div>
      
      <Link to={"/home"}>
        <BotonNav>Home</BotonNav>
        </Link>

        <Link to={"/about"}>
        <BotonNav>About</BotonNav>
        </Link>
        
        <Link to={"/"}> 
      <BotonNav style={{backgroundColor: 'blue'}}>Logout</BotonNav>
      </Link>
      
        </div>
        
      <SearchBar onSearch={props.onSearch} />
      
      
     
        </Navegador>
    </div>
  )
  }
}

export default Nav