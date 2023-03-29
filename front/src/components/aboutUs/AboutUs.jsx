import React from 'react';
import './AboutUs.css';
import people from '../img/imgAboutUs/people.svg';
import cup from '../img/imgAboutUs/cup.svg';
import leaves from '../img/imgAboutUs/leaves.svg';

function AboutUs(){

    return(
        <section class="aboutUs">
            <div class="topImage"></div>

            <div className='titleContainer titleContainerMarginated'>
                <h1>Sobre nosotros</h1>
                <div className="purpleRec"> </div>
            </div>
            <div class="text">
                <div >
                    <p>Mochilas, bandoleras, carpetas, estuches, fundas... Como regalo de empresa o como idea de cumpleaños, todas las propuestas son creadas de manera única y con originalidad.</p>
                    <p>HiloDoble es la oportunidad de <strong>compartir solidaridad llevando diseños con materiales reciclados y ofrecer un empleo a colectivos en vulnerabilidad.</strong></p>
                </div>
                <div>
                    <p>Somos <strong>AIDEI</strong>, empresa de inserción promovida por la <strong>Asociación Arrabal-AID</strong>, y la entidad <strong>ASIMAS</strong>, dos entidades sociales malagueñas preocupadas por el entorno medioambiental y con una clara vocación social. Juntas iniciamos un proyecto en el que queremos dar una nueva vida a personas y materiales.</p>    
                </div>
            </div>
            <div class="target">
                <div class="containerBlocks">
                    <div class="socials">
                        <div class="circle"><img src={people} alt="people icon" /></div>
                        <h4>Sociales</h4>
                        <p>Una nueva vida no solo a los materiales reciclados de los productos, también es la segunda oportunidad de las personas que los crean.</p>
                    </div>
                    <div class="goals">
                        <div class="circle"><img src={cup} alt="cup icon" /></div>
                        <h4>Metas</h4>
                        <p>Tenemos clara nuestra meta: la incorporación social y laboral de las personas, junto a la conservación y desarrollo del entorno.</p>
                    </div>
                    <div class="natural">
                        <div class="circle"><img src={leaves} alt="leaves icon" /></div>
                        <h4>Naturales</h4>
                        <p>Favorecemos la economía circular del entorno, aprovechando recursos, respetando a las personas y conservando el planeta.</p>
                    </div>
                </div>
            </div>
            <div class="text">
                <p><strong>¿CUÁL ES NUESTRA HISTORIA?</strong> Año 2019, la <strong>Asociación Arrabal</strong> con su empresa de inserción <strong>AIDE</strong> y la Asociación <strong>ASIMAS</strong> a través de su casa de acogida, ponen todas sus ilusiones en el inicio de un proyecto profesional que auna la experiencia de la confecciónde ASIMAS y la de la inserción social y empresarial de AIDEI.
                Así nace HILO DOBLE y con la investigación y prueba de distintos materiales arranca su taller de confección donde lonas publicitarias de PVC, cámaras de bicicleta recicladas y banderas reutilizadas, son la materia prima con la que crear bolsos, mochilas y accesorios que son el resultado de un proceso de economía circular de la ciudad de Málaga.</p>
            </div>
        
        </section>
    );
}

export default AboutUs;