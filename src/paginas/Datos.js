import React, { useState } from 'react';
import UserTable from '../componentes/UserTable.js';
import '../estilos/datos.css';
import { v4 as uuidv4 } from "uuid";

function Datos() {

    const usersData = [

        {
            id:uuidv4(),
            nombre: "Nicolas",
            apellido: "Loza",
            edad: 23,
            correo: "nicola.loza@gmail.com",
            direccion: "Tumbaco"
        },
        {
            id:uuidv4(),
            nombre: "Juan",
            apellido: "Perez",
            edad: 35,
            correo: "juanp@gmail.com",
            direccion: "Pifo"
        },
        {
            id:uuidv4(),
            nombre: "Diana",
            apellido: "Carolina",
            edad: 18,
            correo: "dcaro@gmail.com",
            direccion: "Cumbaya"
        }
    ]

    const [users, setUsers] = useState(usersData)


    return (
        <div className='container'>
            <h1>CRUD HOOKS</h1>
            <div><h2>Add user</h2></div>
            <div><h2>View User</h2></div>
            <UserTable users={users}/>
        </div>
    );
}

export default Datos;