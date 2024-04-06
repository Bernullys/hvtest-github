
import CardProjects from "../CardProjects/CardProjects"

import styles from "./ImageSlider.module.css"

function ImageSlider ({ imagesList }) {


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

    return (
        <section className={styles.imageslider_main_container}>
            <section className={styles.imageslider}>
                {
                    cardHomeProjectsProps.map(card => (
                        <CardProjects 
                            key={card.id}
                            project={card.project}
                            description={card.description}
                            backgroundImage={card.backgroundImage}/>
                    ))
                }

            </section>

        </section>
    )
}

export default ImageSlider


// {
//     imagesList.map((img, index) => (
//         <img
//         key={index}
//         src={img} 
//         alt={`Electric-test-image ${index}`}
//         className={
//             index === currentImageIndex ? styles.slide_active : styles.slide} 
//             />
//             ))
// }