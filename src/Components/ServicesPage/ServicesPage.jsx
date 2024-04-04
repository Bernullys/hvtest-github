import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import CardServices from "../CardServices/CardServices"
import styles from "./ServicesPage.module.css"

function ServicesPage () {

    const servicesInfo = [
        {
            id: 1,
            service: "PRUEBAS ELÉCTRICAS DE ACEPTACIÓN A EQUIPOS ELÉCTRICOS",
            backgroundImage: "../../../public/assets/image-home-pruebas.jpeg",
            goTo: "/servicios/pruebas",
            backgroundColor: "#10A4CE",
            aligning: "flex-start",
            textAlign: "start"
        },
        {
            id: 2,
            service: "CONTROL Y PROTECCIONES ELÉCTRICAS",
            backgroundImage: "../../../public/assets/image-home-protecciones.jpeg",
            goTo: "/servicios/control",
            backgroundColor: "#006EDC",
            aligning: "flex-end",
            textAlign: "end"
        },
        {
            id: 3,
            service: "MANTENIMIENTO Y PUESTA EN SERVICIO DE EQUIPOS ELÉCTRICOS",
            backgroundImage: "../../../public/assets/image-home-mantenimiento.jpg",
            goTo: "/servicios/mantenimiento",
            backgroundColor: "#38B000",
            aligning: "flex-start",
            textAlign: "start"
        },
        {
            id: 4,
            service: "ASESORÍA TÉCNICA",
            backgroundImage: "../../../public/assets/image-home-ascesoria.jpeg",
            goTo: "/servicios/asesoría",
            backgroundColor: "#10A4CE",
            aligning: "flex-end",
            textAlign: "end"
        },
        {
            id: 5,
            service: "ARRIENDO DE EQUIPOS DE PRUEBAS ELÉCTRICAS",
            backgroundImage: "../../../public/assets/image-home-arriendo.jpeg",
            goTo: "/servicios/arriendo",
            backgroundColor: "#006EDC",
            aligning: "flex-start",
            textAlign: "start"
        },
    ]

    return (
        <section>
            <section className={styles.services_header_main_container}>
                <section className={styles.services_header_container}>
                    <img src="../../../public/assets/image-service-header.jpeg" alt="services-image" className={styles.services_header_image_1}/>
                    <img src="../../../public/assets/image-service-header2.jpeg" alt="services-image" className={styles.services_header_image_2} />
                    <article className={styles.social_logos_position}>
                        <SocialLogos />
                    </article>
                    <h1 className={styles.services_header_main_title}>Servicio de ingeniería eléctrica<br />
                        <b className={styles.styling_word}> de alto estandar</b></h1>
                    <p className={styles.services_header_paragraph}>En <b>HVTest</b>, nos comprometemos con la importancia de la infraestructura eléctrica, 
                        ofreciendo un amplio conjunto de <b>servicios especializados en el área de pruebas eléctricas de alta tensión, control y protecciones 
                        eléctricas, mantención y puesta en servicio de equipos eléctricos, asesoría técnica, y arriendo de equipos para ensayos eléctricos.</b></p>
                </section>
            </section>
            <section className={styles.services_content_main_container}>
                <section className={styles.services_content_container}>
                    <h2 className={styles.services_content_title}>¿En que te podemos ayudar?</h2>
                    <p className={styles.services_content_paragraph}>Realizamos pruebas en diversos equipos instalados en sistemas eléctricos, 
                        incluyendo transformadores de potencia, 
                        interruptores con tecnología SF6 o cualquier medio de extinción del arco eléctrico, 
                        desconectadores, transformadores de medición, conductores, celdas, 
                        descargadores de sobretensión, líneas de transmisión y sistemas de puesta a tierra, entre otros.</p>
                    <h2 className={styles.services_content_subtitle}>Conoce en detalle nuestros servicios</h2>
                    <section>
                        {
                            servicesInfo.map(s => (
                                <CardServices 
                                    key={s.id}
                                    service={s.service}
                                    backgroundImage={s.backgroundImage}
                                    backgroundColor={s.backgroundColor}
                                    alinging={s.aligning}
                                    textAling={s.textAlign}
                                    goTo={s.goTo}/>
                            ))
                        }
                    </section>
                    
                </section>
            </section>
        </section>
    )
}

export default ServicesPage