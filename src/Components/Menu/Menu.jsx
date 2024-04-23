import styles from "./Menu.module.css"

function Menu () {
    return (
        <section>
            <nav className={styles.header_nav_container}>

                <NavLink className={styles.a_logo} to="/">
                    <section className={styles.header_logo_container}></section>
                </NavLink>

                <ul className={styles.header_nav_ul}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Proyectos
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.contact_header_button_container}>
                    <li>
                        <NavLink
                            to="/contacto"
                            id={styles.cotiza_header_button}>
                                Contactanos
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </section>
    )
}

export default Menu