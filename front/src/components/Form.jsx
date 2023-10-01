import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import validate from '../assets/validation'
import { Link } from 'react-router-dom'


const Forms = styled.form`
border: solid 1px black;
border-radius: 10px;
background-color: lightblue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: fit-content;
padding: 3rem;
`

const Imagen = styled.img`
border-radius: 50%;
`

const Campo = styled.input`
width: 25rem;
height: 1rem;
`
const Enviar = styled.button`
width: 9rem;
height: 2rem;
background-color: green;
color: white;
border: none;
border-radius: 2px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: bold;

&:hover {
  cursor:pointer;
  opacity: .6;
}
`

const Contenedor = styled.div`
height: 55rem;
display:flex;
justify-content: center;
align-items: center;
`

const Formulario = () => {

const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const [errors, setErrors] = useState({})

const handleChange = (event) => {
    const property = event.target.name 
    const value = event.target.value
    setUserData({...userData, [property]:value})
    setErrors(validate({...userData, [property]:value}))
}



  return (
    <Contenedor>
        <Forms onSubmit={(e) => {e.preventDefault()}}>
        <Imagen src="./src/assets/rickandmorty.jpg"/>
            <h1>Login</h1>
            <div>
            <label htmlFor="email">Email:</label> <br></br>
            <Campo type='text' name='email' id='email' value={userData.email} onChange={handleChange}></Campo>
            <h4>
              {errors.e1 ? errors.e1 : (errors.e2 ? errors.e2 : (errors.e3 ? errors.e3 : ''))}
            </h4>
            </div>
            <div>
            <label htmlFor="pass">Password:</label> <br></br>
            <Campo type='text' name='password' id='pass' value={userData.password} onChange={handleChange}></Campo>
            <h4>{errors.p1 ? errors.p1 : (errors.p2 ? errors.p2 : '')}</h4>
            </div>
            <br></br>
            <Link to={"/home"}>
            <Enviar type='submit' disabled={(userData.email && userData.password) ? ((errors.e1 || errors.e2 || errors.e3 || errors.p1 || errors.p2) ? true : false) : true}> Submit</Enviar>
            </Link>
            
        </Forms>
    </Contenedor>
  )
}

export default Formulario