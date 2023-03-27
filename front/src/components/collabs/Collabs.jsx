import React from "react"
import './Collabs.css'
import clinicaDeLaBicicleta from '../img/imgCollabs/clinicaDeLaBicicleta.png'
import museoThyssen from '../img/imgCollabs/museoThyssen.jpg'
import dondeBicicletas from '../img/imgCollabs/dondeBicicletas.jpeg'
import dondeMuseo from '../img/imgCollabs/dondeMuseo.jpeg'
import Button from "./Button"
import {Link} from 'react-router-dom'



function Collabs(){
    return (
        <>
        <div className='container1'>
            <h2 className='title'>Tiendas Amigas</h2>
            <div className="purpleRec"> </div>
            <p className='text1'>En nuestra sección TIENDA, tienes nuestros productos para compralos online, pero si eres de verlos en persona, además de nuestra participación en diferentes eventos, a continuación te indicamos el listado de "tiendas amigas" donde puedes encontrarlos: </p>
        </div>

        <section className='cardFriendShop'>
        <img className="friendShop1" src={clinicaDeLaBicicleta} alt="Tienda Clinica de la Bicicleta" />
        <div className="info1">
            <h2>Clínica de la Bicicleta</h2>
            <h3>C/Poeta Salvador Ibarra España, 2</h3>
            <h3>Barriada La Roca. 29011 Málaga España</h3>
            <br />
            <p>Expertos en bicicleta urbana:</p>
            <br />
                <ul className='list'>
                    <li>Venta de bicis nuevas: para la ciudad, para viajar, híbridas, eléctricas ...</li>
                    <li>Todo tipo de accesorios y componentes para hacer más fácil el uso de la bici en la jungla de la ciudad.</li>
                    <li>Reparaciones y asesoramiento a tu medida.</li>
                </ul>
                <br />
            <div>
                <Link to ='https://www.facebook.com/ClinicaDeLaBicicleta/'><Button text='Facebook' clase='frame'/></Link>
                <Link to ='https://www.clinicadelabicicleta.com/'><Button text='Sitio Web' clase='frame'/></Link> 
                <Link to ='https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Bicicleta/@36.732958,-4.432647,18z/data=!4m6!3m5!1s0xd72f7c05b3d8539:0xdbccd044236f14d6!8m2!3d36.732958!4d-4.4326467!16s%2Fg%2F11h14ztpx?hl=es'><Button text='Cómo llegar' clase='frame'/></Link>       

            </div>
        </div>
        </section>

        <div>
            <img className="dondeBicicletas" src={dondeBicicletas} alt="Localizacion Tienda Clinica de la Bicicleta" />
        </div>

        <section className='cardFriendShop'>
        <div className="info2">
            <h2>Museo Carmen Thyssen Málaga</h2>
            <h3>Plaza Carmen Thyssen</h3>
            <h3>C/ Compañía, 10. 29008 Málaga España</h3>
            <p>El Museo Carmen Thyssen Málaga es una sucursal del Museo Thyssen-Bornemisza de Madrid. Se encuentra en el centro histórico de Málaga y alberga una colección de más de 200 obras de arte español del siglo XIX, con especial énfasis en la pintura andaluza y malagueña. También hay exposiciones temporales y actividades para niños y adultos.Es una visita obligada para los amantes del arte y la cultura que visitan la ciudad de Málaga.</p>
            <br />
                <div className='redesSociales2'>
                    <Link to ='https://www.facebook.com/carmenthyssenmalaga'><Button text='Facebook' clase='frame'/></Link>       
                    <Link to ='https://www.carmenthyssenmalaga.org/'><Button text='Sitio Web' clase='frame'/></Link>
                    <Link to ='https://www.google.com/maps/place/Museo+Carmen+Thyssen+M%C3%A1laga/@36.721409,-4.422999,17z/data=!4m6!3m5!1s0xd72f79b920cfe39:0x3f64d261cf1e2fff!8m2!3d36.7214095!4d-4.4229986!16s%2Fm%2F0pkz_bf?hl=es'><Button text='Cómo llegar' clase='frame'/></Link>
                </div>
        </div>
        <img className="friendShop2" src={museoThyssen} alt="Tienda Clinica de la Bicicleta" />
        </section>

        <div>
            <img className="dondeBicicletas" src={dondeMuseo} alt="Localizacion Tienda Clinica de la Bicicleta" />
        </div>
        
        </>

    );
}

export default Collabs 
