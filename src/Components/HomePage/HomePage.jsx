import SocialLogos from "../SocialLogos/SocialLogos"
import styles from "./HomePage.module.css"

function HomePage () {
    return (
        <section className={styles.home_main_container}>
            <section className={styles.home_sociallogos_container}>
                <SocialLogos />
            </section>
            <section className={styles.home_title_container}>
                <h1 className={styles.home_title}>Servicios Eléctricos <b className={styles.title_stylist_words}>de Alto Estándar</b> <br></br>para la Industria</h1>
                <section className={styles.home_buttons_title_container}>
                    <button className={styles.blue_button}>Contactanos</button>
                    <button className={styles.transparent_button}>Ver Proyectos</button>
                </section>
            </section>
        </section>
    )
}

export default HomePage