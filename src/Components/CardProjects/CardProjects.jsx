import { NavLink } from "react-router-dom"
import styles from "./CardProjects.module.css"

function CardProjects ( { project, description, backgroundImage, imagesList}) {

    const inlineContainerStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        opacity: "1"
    }
    
    return (
        <section className={styles.card_home_project_container} style={inlineContainerStyles}>
            <section className={styles.card_home_project_info}>
                <h2 className={styles.card_home_project_title}>{project}</h2>
                <p className={styles.card_home_project_description}>{description}</p>

            </section>
        </section>
    )
}

export default CardProjects

