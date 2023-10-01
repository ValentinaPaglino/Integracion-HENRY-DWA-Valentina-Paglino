import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
margin: 2rem;
gap: 3rem;
`

const Cards = (props) => {
  const {characters, onClose} = props;
  return (
  <>

    <Container>
        {characters.map((char) => {
           return (
            < Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin.name}
              image={char.image}
              onClose={onClose}
            />
           );
        }) }
    </Container>
    </>
  );
};

export default Cards;
