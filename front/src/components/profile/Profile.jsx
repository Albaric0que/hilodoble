import React,  { useEffect, useState } from 'react'
/*import axios from 'axios';*/
import './Profile.css'
/*import { useParams } from 'react-router-dom';*/

/*function Profile() {
    const param = useParams();
    const [ user, setUser ] = useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/profile/${param.id}`) 
        .then((response) =>  {

        console.log(response)

            const data = response.data;
            setUser(data);
        }, )
        .catch(error => {
            console.error(error);
        });

    }, [param.id]);

    return (
        <h1 className='nameItemShow'>{user.name} {user.surname}</h1>
        <div className= 'bigContainer'>
            <div className= 'containerProduct' key={user.id}>
                <h1>{user.email}</h1>
                <h1>{user.password}</h1>
                <h1>{user.phone}</h1>
                <h1>{user.city}</h1>
                <h1>{user.address}</h1>
                <h1>{user.postcode}</h1>
            </div>
            </div>
    )
}

export default Profile*/

function Profile() {
    
    return (

    <>
    
    <div className='ProfileContainer'>
        <div class="titleContainer">
            <h1>Mis datos</h1>
            <div class="purpleRec"></div>
        </div>

        <div className='userContainer'>
            <div className='userDataContainer'>
                <h2>Perfil</h2>
                <ul>
                    <li><span>Nombre: </span>Alesia</li>
                    <li><span>Apellidos: </span>Baldeon Machuca</li>
                    <li><span>Correo: </span>alesia@macarrones.com</li>
                    <li><span>Contraseña: </span>macarrones</li>
                    <li><span>Teléfono: </span>627685080</li>
                </ul>
            </div>
            <div className='userDirectionContainer'>
                <h2>Dirección</h2>
                <ul>
                    <li><span>Vía: </span>Calle Ravioli, 23</li>
                    <li><span>Ciudad: </span>Torremolinos</li>
                    <li><span>Código postal: </span>29620</li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
    )
}

export default Profile