const axios = require('axios')

const getCharacterById = async (req, res) => {
    const { id } = req.params;
  
    
    try{  
      // Esto tendría que ir en un service
      const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    res.status(200).json(character.data);}
  
    catch{
      const error = new Error('No hay personajes con ese id!')
      res.json(error.message)
    }
  };

  module.exports = getCharacterById;