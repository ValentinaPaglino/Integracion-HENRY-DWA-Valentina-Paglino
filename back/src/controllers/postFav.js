const {Favorite} = require('../DB_connection')

const postFav = async (req, res) => {
    
    try {
        const {name, origin, species, status, gender, image} = req.body

        if (!name || !origin || !species || !status || !gender || !image) return res.status(401).send('Faltan datos')
      
        await Favorite.findOrCreate({ where: {name, origin, species, status, gender, image}})

        const allFavs = await Favorite.findAll()
        
       if(allFavs) return res.status(200).json(allFavs)

    } 
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = postFav