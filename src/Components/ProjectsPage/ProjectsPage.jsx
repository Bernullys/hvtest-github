import SocialLogos from "../SocialLogos/SocialLogos"
import CardProjects from "../CardProjects/CardProjects"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "./ProjectsPage.module.css"

function ProjectsPage () {

    const cardHomeProjectsProps = [
        {
            id: 1,
            project: "División Chuquicamata, Codelco - Precision",
            description: "Ensayos eléctricos y mantención a equipos de media y baja tensión tales como: Interruptores, CCM's, CDC's, Switchtgears y transformadores.",
            backgroundImage: "../../../public/assets/image-home-project-chuqui.jpeg"
        },
        {
            id: 2,
            project: "División Ministro Hales, Codelco - Ingelcop",
            description: "Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.",
            backgroundImage: "../../../public/assets/image-home-project-ministrales.jpeg"
        },
        {
            id: 3,
            project: "Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens",
            description: "Pruebas SAT, equipo primario de alta tensión.",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        },
        {
            id: 4,
            project: "Pruebas eléctricas en centros de transformación del Parque Fotovoltaico Finis Terrae",
            description: "Pruebas de mantenimiento preventivo a transformador y celdas de media tensión.",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        },
        {
            id: 5,
            project: "Subestación Llamara (66/23 kV), Faena Nueva Victoria, SQM.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        },
        {
            id: 6,
            project: "Subestación Puchuncaví (110/13.8 kV), Aguas Pacifico.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        },
        {
            id: 7,
            project: "Subestación Gis Tres Quebradas (220 kV), ",
            description: "Pruebas eléctricas a equipos primarios tipo Gis y tipo intemperie",
            backgroundImage: "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"
        }
    ]

    const txPowerServiceImages = [
        [
            "../../../public/assets/project1-image1.jpeg",
            "../../../public/assets/project1-image2.jpeg",
            "../../../public/assets/project1-image3.jpeg",
            "../../../public/assets/project1-image4.jpeg",
            "../../../public/assets/project1-image5.jpeg",
            "../../../public/assets/project1-image6.jpeg",
            "../../../public/assets/project1-image7.jpeg",
            "../../../public/assets/project1-image8.jpeg",
        ],
        [
            "../../../public/assets/image-home-project-ministrales.jpeg",
            "../../../public/assets/project2-image1.jpeg",
            "../../../public/assets/project2-image2.jpeg",
        ],
        [
            "../../../public/assets/project3-image1.jpeg",
            "../../../public/assets/project3-image2.jpeg",
            "../../../public/assets/project3-image3.jpeg",

        ],
        [
            "../../../public/assets/project4-image1.jpeg",
            "../../../public/assets/project4-image2.jpeg",
            "../../../public/assets/project4-image3.jpeg",
            "../../../public/assets/project4-image4.jpeg",
            "../../../public/assets/project4-image5.jpeg",
            "../../../public/assets/project4-image6.jpeg",
            "../../../public/assets/project4-image7.jpeg",
            "../../../public/assets/project4-image8.jpeg",

        ],
        [
            "../../../public/assets/project5-image1.jpeg",
            "../../../public/assets/project5-image2.jpeg",

        ],
        [
            "../../../public/assets/project6-image1.jpeg",
            "../../../public/assets/project6-image2.jpeg",
            "../../../public/assets/project6-image3.jpeg",
            "../../../public/assets/project6-image4.jpeg",
            "../../../public/assets/project6-image5.jpeg",
            "../../../public/assets/project6-image6.jpeg",
            "../../../public/assets/project6-image7.jpeg",
            "../../../public/assets/project6-image8.jpeg",

        ],
        [
            "../../../public/assets/project7-image1.jpeg",
            "../../../public/assets/project7-image2.jpeg",
            "../../../public/assets/project7-image3.jpeg",
            "../../../public/assets/project7-image4.jpeg",
            "../../../public/assets/project7-image5.jpeg",

        ],
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
                    cardHomeProjectsProps.map((project, index) => (
                        <section className={styles.projects_text_container}>
                            <section className={styles.projects_slider_images_container}>
                                <ImageSlider 
                                    imagesList={txPowerServiceImages[index]}
                                />
                            </section>
                            <CardProjects 
                                key={index}
                                project={project.project}
                                description={project.description}
                            />
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default ProjectsPage