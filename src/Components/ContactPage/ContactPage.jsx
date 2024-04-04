import styles from "./ContactPage.module.css"

function ContactPage () {
    return (
        <section className={styles.contact_main_section_container}>
            <h1 className={styles.contact_title}>Déjanos tu mensaje y te responderemos a la brevedad</h1>
            <p className={styles.contact_paragraph}>Para cualquier duda o consulta sobre nuestros proyectos y equipos, complete el siguiente formulario y responderemos a la brevedad.</p>
            <form action="" className={styles.contact_form}>
                <section className={styles.contact_form_sections}>
                    <label for="name">Nombre(s) *</label>
                    <input type="text" name="name" id="name" placeholder="write your name" required/>
                    <label for="lastName">Apellido(s) *</label>
                    <input type="text" name="lastName" id="lastName" placeholder="write your last name" required/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="region">Región *</label>
                    <input type="text" name="region" id="region" placeholder="region" required/>
                    <label for="email">Correo *</label>
                    <input type="email" name="email" id="email" placeholder="correo eléctronico" required/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="phone">Telefono *</label>
                    <input type="tel" name="phone" id="phone" placeholder="número telefonico" required/>
                    <label for="toWho">A quien va dirigido</label>
                    <select name="toWho" id="toWho">
                        <option value="general" selected>General</option>
                        <option value="tests">Mediciones</option>
                        <option value="rent">Alquiler de equipos</option>
                    </select>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="message">Ingrese su mensaje *</label>
                    <textarea type="text" name="message" id="message" />
                </section>
                <br />
                <button className={styles.button_contact}>Enviar mensaje</button>
            </form>
        </section>
    )
}

export default ContactPage