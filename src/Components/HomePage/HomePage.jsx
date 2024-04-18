import React,{ useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import CardHomeSercives from "../CardHomeServices/CardHomeServices"
import CardHomeProjects from "../CardHomeProjects/CardHomeProjects"
import CardHomeClients from "../CardHomeClients/CardHomeClients"
import CardSlider from "../CardSlider/CardSlider"
import { TbPointFilled } from "react-icons/tb"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import styles from "./HomePage.module.css"

function HomePage () {

    const cardHomeServicesProps = [
        {
            id: 1,
            serviceFirstLine: "PRUEBAS ELÉCTRICAS DE ACEPTACIÓN",
            serviceSecondLine: "A EQUIPOS ELÉCTRICOS",
            backgroundImage: "../../../public/assets/image-home-pruebas.jpeg",
            goTo: "/servicios/pruebas"
        },
        {
            id: 2,
            serviceFirstLine: "CONTROL Y PROTECCIÓNES",
            serviceSecondLine: "ELÉCTRICAS",
            backgroundImage: "../../../public/assets/image-home-protecciones.jpeg",
            goTo: "/servicios/control"
        },
        {
            id: 3,
            serviceFirstLine: "MANTENIMIENTO Y PUESTA EN SERVICIO",
            serviceSecondLine: "DE EQUIPOS ELÉCTRICOS",
            backgroundImage: "../../../public/assets/image-home-mantenimiento.jpg",
            goTo: "/servicios/mantenimiento"
        },
        {
            id: 4,
            serviceFirstLine: "ARRIENDO EQUIPOS",
            serviceSecondLine: "DE PRUEBAS ELÉCTRICAS",
            backgroundImage: "../../../public/assets/image-home-arriendo.jpeg",
            goTo: "/servicios/arriendo"
        },
        {
            id: 5,
            serviceFirstLine: "ASESORÍA TÉCNICA",
            backgroundImage: "../../../public/assets/image-home-ascesoria.jpeg",
            goTo: "/servicios/asesoría"
        },
    ]

    const cardHomeProjectsProps = [
        {
            id: 6,
            project: "División Chuquicamata, Codelco - Precision",
            description: "Ensayos eléctricos y mantención a equipos de media y baja tensión tales como: Interruptores, CCM's, CDC's, Switchtgears y transformadores.",
            backgroundImage: "../../../public/assets/image-home-project-chuqui.jpeg"
        },
        {
            id: 7,
            project: "División Ministro Hales, Codelco - Ingelcop",
            description: "Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.",
            backgroundImage: "../../../public/assets/image-home-project-ministrales.jpeg"
        },
        {
            id: 8,
            project: "Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens",
            description: "Pruebas SAT, equipo primario de alta tensión.",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        }
    ]

    const cardHomeClientProps = [
        {
            id: 9,
            backgroundImage: "../../../public/assets/logo-enel-green-power.jpg"
        },
        {
            id: 10,
            backgroundImage: "../../../public/assets/logo-fluxsolar.png"
        },
        {
            id: 11,
            backgroundImage: "../../../public/assets/logo-ingeprover.jpeg"
        },
        {
            id: 12,
            backgroundImage: "../../../public/assets/logo-ionit.jpeg"
        },
        {
            id: 13,
            backgroundImage: "../../../public/assets/logo-mlrental.jpeg"
        }
    ]

    return (
        <section className={styles.home_page_main_container}>
            <section className={styles.home_top_container}>
                <section className={styles.home_top_container}>
                    <section className={styles.home_sociallogos_container}>
                        <SocialLogos />
                    </section>
                    <section className={styles.home_title_container}>
                        <h1 className={styles.home_title}>Servicios Eléctricos <b className={styles.title_stylist_words}>de Alto Estándar</b> <br></br>para la Industria</h1>
                        <section className={styles.home_buttons_title_container}>
                            <NavLink to="/contacto">
                                <button className={styles.blue_button}>Contactanos</button>
                            </NavLink>
                            <NavLink to="/proyectos">
                                <button className={styles.transparent_button}>Ver Proyectos</button>
                            </NavLink>
                        </section>
                    </section>
                </section>
                <section className={styles.home_middle_container}>
                    <h2 className={styles.home_middle_title}>Bienvenidos a Hv Test</h2>
                    <p className={styles.home_middle_paragraph}>Somos una empresa de servicios eléctricos conformada por profesionales en el área de ingeniería, especialistas en baja, media y alta tensión, 
                        orientados a satisfacer las necesidades y exigencias de nuestros clientes, de acuerdo a las normas y estándares actuales que rigen al sistema 
                        eléctrico nacional e internacional.</p>
                    <NavLink to="/nosotros">
                        <button className={styles.white_button}>Saber más</button>
                    </NavLink>
                </section>
                <section className={styles.home_services_container}>
                    <h2 className={styles.home_services_title}>Nuestros Servicios</h2>
                    <section className={styles.home_services_arrows_cards_container}>
                        <section className={styles.home_services_cards_container}>

                            {
                                cardHomeServicesProps.map(card => (
                                    <CardHomeSercives
                                    key={card.id}
                                    serviceFirstLine={card.serviceFirstLine}
                                    serviceSecondLine={card.serviceSecondLine} 
                                    backgroundImage={card.backgroundImage}
                                    goTo={card.goTo}
                                    />
                                ))
                            }


                        </section>
                    </section>
                </section>

                <section>
                    <h2 className={styles.home_projects_title}>Proyectos</h2>
                    <section className={styles.home_projects_grid_container}>
                        {
                            cardHomeProjectsProps.map(card => (
                                <CardHomeProjects 
                                    key={card.id}
                                    project={card.project}
                                    description={card.description}
                                    backgroundImage={card.backgroundImage}/>
                            ))
                        }
                    </section>
                </section>
                <section>
                    <h2 className={styles.home_clients_title}>Clientes</h2>
                    <section className={styles.home_clients_container}>
                        {
                            cardHomeClientProps.map(card => (
                                <CardHomeClients 
                                    key={card.id}
                                    backgroundImage={card.backgroundImage}/>
                            ))
                        }
                    </section>
                </section>
            </section>

        </section>
    )
}

export default HomePage