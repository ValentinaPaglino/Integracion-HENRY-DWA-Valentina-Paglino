import React from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
color: white;
padding: 0 2rem;
font-weight:bold;
`

const About = () => {
  return (
    <AboutStyled>
        <h1>Mi Rick and Morty WebApp</h1>
        <p>Hola! Soy Valentina Paglino. Me dedico a aprender sobre desarrollo y diseño web. En este momento estoy realizando una serie de cursos, tanto de Diseño UX/UI como de desarrollo web.</p>
        <p>Esta página web fue creada como un proyecto integrador de la carrera de Desarrollo Web Avanzado de Soy Henry. Nos sirvió para aprender sobre el funcionamiento y elementos de la librería React. <br/> Es una página con temática de la serie de televisión "Rick and Morty", en donde mediante el id de un personaje podemos agregar Cards con información del mismo a la Home, y luego clickear en su nombre para ver el Detail. También tiene un Login en el cual trabajamos con la validación de formularios en React.</p>
    </AboutStyled>
  )
}

export default About