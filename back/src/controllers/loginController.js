
const {User} = require('../DB_connection')

const checkLogin = async (req, res) => {
    const { email, password } = req.query;
    try{
    if (!email || !password) return res.status(400).send('Faltan Datos');

    const user = await User.findOne({ where: {email: email} })
    
    if (!user) return res.status(404).send('Usuario no encontrado');

    return user.password === password ? res.redirect('http://localhost:5173/home') : res.status(403).send('Contraseña incorrecta');

    }
    catch(error){
        return res.status(500).json(error.message)
    }

   
    // if (email === loginData.email && password === loginData.password){
    //     const message = {
    //         name: 'Login exitoso'
    //     }
    //    res.status(200).json(message.name)
    // }
    // else {
    //     const error = new Error('Login inválido')
    //     res.status(401).json(error.message)
    // }
}

module.exports = checkLogin