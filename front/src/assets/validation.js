const validate = (userData) => {

let errors = {};

if (!userData.email) {
    errors.e1 = "Debe ingresar un email"}

if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))) errors.e2 = 'El email no es válido'

if (userData.email.length > 35) errors.e3 = 'El email debe tener menos de 35 caracteres'

if (!( /\d/.test(userData.password) )) errors.p1 = 'La contraseña debe tener un número'

if (!(userData.password.length <= 10 && userData.password.length >= 6)) errors.p2 = "La contraseña debe tener entre 6 y 10 caracteres"

return errors;

 /*if (!userData.email) setErrors({...errors, email: 'El email está vacío'})
 else {
if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))) setErrors({...errors, email:'El email no es válido'})
else if (userData.email.length > 35) setErrors({...errors, email:'El email debe tener menos de 35 caracteres'})
else setErrors({...errors, email: ''})
 }

 if (!( /\d/.test(userData.password) )) setErrors({...errors, password: 'La contraseña debe contener un número'})
else if (!(userData.password.length <= 10 && userData.password.length >= 6)) setErrors({...errors, password: 'La contraseña debe tener entre 6 y 10 caracteres'})
else setErrors({...errors, password:''})*/


}
export default validate