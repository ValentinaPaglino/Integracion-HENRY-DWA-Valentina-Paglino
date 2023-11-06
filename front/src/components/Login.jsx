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

const SignUp = styled.button`
width: 6rem;
height: 2rem;
background-color: blue;
color: white;
border: none;
border-radius: 2px;
font-family: Verdana, Geneva, Tahoma, sans-serif;


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

const [isLogin, setLogin] = useState(true)

const changeLogin = (e) => {
  e.preventDefault()
  setLogin(!isLogin)
}
const handleChange = (event) => {
    const property = event.target.name 
    const value = event.target.value
    setUserData({...userData, [property]:value})
    setErrors(validate({...userData, [property]:value}))
}


  return (
    <Contenedor>
        <Forms action='http://localhost:3001/' method={isLogin ? 'get' : 'post'}>
        <Imagen src="./src/assets/rickandmorty.jpg"/>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
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
            <Enviar type='submit'>Submit</Enviar>
            <h5>{isLogin ? "¿Don't have an account?" : "¿Already have an account?" }</h5>
            <SignUp onClick={changeLogin}>{isLogin ? "Sign Up" : "Login"}</SignUp>
        </Forms>
        
        
    </Contenedor>
  )
}

export default Formulario
