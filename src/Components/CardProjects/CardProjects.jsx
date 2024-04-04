import { NavLink } from "react-router-dom"
import styles from "./CardProjects.module.css"

function CardProjects ( { project, description}) {

    return (
        <section className={styles.card_project_container}>
            <section className={styles.card_project_info}>
                <h2 className={styles.card_project_title}>{project}</h2>
                <p className={styles.card_project_description}>{description}</p>
            </section>
        </section>
    )
}

export default CardProjects

