import './Login.css'
import { useState } from 'react'
import {  Link,useLocation } from 'react-router-dom';
import { Button ,Form} from 'react-bootstrap';

export function Login({setUsuario}){
    const[correo, setCorreo] = useState("")
    const[contraseña, setContraseña]= useState("")
    const[error, setEror] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(correo == "" || contraseña == ""){
            setEror(true)
            return
        }
        setEror(false)
    }

    return(
        <section>
            <h1>Login provicional</h1>
            <form 
            className='formulario'
            onSubmit={handleSubmit}
            
            >
                <input 
                type="text"
                value={correo}
                onChange={event => setCorreo(event.target.value)}
                />
                <input 
                type="password"
                value={contraseña}
                onChange={event => setContraseña(event.target.value)}
                />
                <Link to="/PerfilCliente" >
                <Button>Iniciar sesion</Button>
                </Link>
            </form>
            {error && <p>llena todos los campos</p>}
        </section>
    )


} 