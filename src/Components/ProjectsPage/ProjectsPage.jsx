import React, { useState, useEffect } from "react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import SocialLogos from "../SocialLogos/SocialLogos"
import CardProjects from "../CardProjects/CardProjects"
import styles from "./ProjectsPage.module.css"

function ProjectsPage () {

    const [projectImageIndices, setProjectImageIndices] = useState({});

    useEffect(() => {
        const initialIndices = {};
        cardProjectsProps.forEach(project => {
            initialIndices[project.id] = 0;
        });
        setProjectImageIndices(initialIndices);
    }, []);

    function nextImage(projectId) {
        setProjectImageIndices(prevState => ({
            ...prevState,
            [projectId]: (prevState[projectId] + 1) % cardProjectsProps.find(p => p.id === projectId).backgroundImage.length
        }));
    }

    function prevImage(projectId) {
        setProjectImageIndices(prevState => ({
            ...prevState,
            [projectId]: (prevState[projectId] - 1 + cardProjectsProps.find(p => p.id === projectId).backgroundImage.length) % cardProjectsProps.find(p => p.id === projectId).backgroundImage.length
        }));
    }

    const cardProjectsProps = [
        {
            id: 11,
            project: "División Chuquicamata, Codelco - Precision.",
            description: "Ensayos eléctricos y mantención a equipos de media y baja tensión tales como: Interruptores, CCM's, CDC's, Switchtgears y transformadores.",
            backgroundImage: [
                "../../../public/assets/project1-image1.jpeg",
                "../../../public/assets/project1-image2.jpeg",
                "../../../public/assets/project1-image3.jpeg",
                "../../../public/assets/project1-image4.jpeg",
                "../../../public/assets/project1-image5.jpeg",
                "../../../public/assets/project1-image6.jpeg",
                "../../../public/assets/project1-image7.jpeg",
                "../../../public/assets/project1-image8.jpeg",
            ],
        },
        {
            id: 12,
            project: "División Ministro Hales, Codelco - Ingelcop.",
            description: "Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.",
            backgroundImage: [
                "../../../public/assets/image-home-project-ministrales.jpeg",
                "../../../public/assets/project2-image1.jpeg",
                "../../../public/assets/project2-image2.jpeg",
            ],
        },
        {
            id: 13,
            project: "Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens.",
            description: "Pruebas SAT, equipo primario de alta tensión.",
            backgroundImage: [
                "../../../public/assets/project3-image1.jpeg",
                "../../../public/assets/project3-image2.jpeg",
                "../../../public/assets/project3-image3.jpeg",
    
            ],
        },
        {
            id: 14,
            project: "Pruebas eléctricas en centros de transformación del Parque Fotovoltaico Finis Terrae.",
            description: "Pruebas de mantenimiento preventivo a transformador y celdas de media tensión.",
            backgroundImage: [
                "../../../public/assets/project4-image1.jpeg",
                "../../../public/assets/project4-image2.jpeg",
                "../../../public/assets/project4-image3.jpeg",
                "../../../public/assets/project4-image4.jpeg",
                "../../../public/assets/project4-image5.jpeg",
                "../../../public/assets/project4-image6.jpeg",
                "../../../public/assets/project4-image7.jpeg",
                "../../../public/assets/project4-image8.jpeg",
    
            ],
        },
        {
            id: 15,
            project: "Subestación Llamara (66/23 kV), Faena Nueva Victoria, SQM.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: [
                "../../../public/assets/project5-image1.jpeg",
                "../../../public/assets/project5-image2.jpeg",
    
            ],
        },
        {
            id: 16,
            project: "Subestación Puchuncaví (110/13.8 kV), Aguas Pacifico.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: [
                "../../../public/assets/project6-image1.jpeg",
                "../../../public/assets/project6-image2.jpeg",
                "../../../public/assets/project6-image3.jpeg",
                "../../../public/assets/project6-image4.jpeg",
                "../../../public/assets/project6-image5.jpeg",
                "../../../public/assets/project6-image6.jpeg",
                "../../../public/assets/project6-image7.jpeg",
                "../../../public/assets/project6-image8.jpeg",
    
            ],
        },
        {
            id: 17,
            project: "Subestación Gis Tres Quebradas (220 kV).",
            description: "Pruebas eléctricas a equipos primarios tipo Gis y tipo intemperie",
            backgroundImage: [
                "../../../public/assets/project7-image1.jpeg",
                "../../../public/assets/project7-image2.jpeg",
                "../../../public/assets/project7-image3.jpeg",
                "../../../public/assets/project7-image4.jpeg",
                "../../../public/assets/project7-image5.jpeg",
    
            ],
        }
    ]


    return (
        <section className={styles.projects_page_main_container}>
            <section className={styles.projects_page_sociallogos_container}>
                <SocialLogos />
            </section>
            <section className={styles.projects_texts_container}>
                <h1 className={styles.projects_title}>Proyectos</h1>
                <p className={styles.projects_paragraph}>Conoce algunos de nuestros proyectos</p>
            </section>
            <section className={styles.projects_container}>
                {
                    cardProjectsProps.map((project, index) => (
                        <section key={index} className={styles.projects_cards_container}>
                            <CardProjects 
                                project={project.project}
                                description={project.description}
                                backgroundImage={project.backgroundImage[projectImageIndices[project.id]]}
                            />
                            <IoIosArrowRoundBack className={styles.card_arrow_left} onClick={() => prevImage(project.id)}/>
                            <IoIosArrowRoundForward className={styles.card_arrow_right} onClick={() => nextImage(project.id)}/>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default ProjectsPage