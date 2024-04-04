import { NavLink } from "react-router-dom"
import styles from "./CardHomeServices.module.css"

function CardHomeSercives ({ service, backgroundImage, goTo, isSelected }) {

    const lineStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return (
        <section className={styles.card_home_service_container} style={lineStyles}>
            <section className={styles.card_home_service_container_blind}>
                <h2 className={styles.card_home_service_title}>{service}</h2>
                <NavLink to={goTo}>
                    <button className={styles.white_button_sm}>Ver Servicio</button>
                </NavLink>
            </section>
        </section>
    )
}

export default CardHomeSercives