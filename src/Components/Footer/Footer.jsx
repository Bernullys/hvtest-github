import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import styles from "./Footer.module.css"

function Footer () {
    return (
        <footer className={styles.footer_main_container}>
            <section className={styles.footer_nav_container}>
                <section className={styles.footer_logo_container}>
                    <NavLink to="/inicio">
                        <img className={styles.logo_hvt_footer} src="../../../public/assets/logo-footer.png" alt="HVTest-company-logo" />
                    </NavLink>
                </section>
                <section className={styles.footer_central_container}>
                    <SocialLogos />
                    <ul>
                        <h3>Email</h3>
                        <li>l.nunez@hvtest.cl</li>
                        <li>j.freitez@hvtest.cl</li>
                    </ul>
                    <ul>
                        <h3>Teléfonos</h3>
                        <li>(+56) 990886123</li>
                        <li>(+56) 949220700</li>
                    </ul>
                </section>
            </section>
            <section className={styles.botton_rights}>
                <ul>
                    <li>Copyright 2023 G&N Brands</li>
                    <li>Contenido corporativo intern. Prohibida su reproducción.</li>
                </ul>
                <ul>
                    <li>Politicas de Privacidad y Términos de uso</li>
                </ul>
                <ul>
                    <li>Politicas Corporativas</li>
                </ul>
                <ul>
                    <li>Trabajamos en todo Chile</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer