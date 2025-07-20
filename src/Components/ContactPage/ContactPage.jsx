import { useState } from "react";
import styles from "./ContactPage.module.css"

function ContactPage () {

    const backToEmptyFormIputs = () => {
        document.getElementById('name').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('region').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('toWho').selectedIndex = 0;
        document.getElementById('message').value = '';
    }

    const [data, setData] = useState({
        name: "",
        lastName: "",
        region: "",
        email: "",
        phone: "",
        toWho: "",
        message: ""
    })

    const handleInputs = (e) => {
        setData(...data, [e.target.name] = e.target.value)
    }

    async function sendEmail(e) {
        e.preventDefault();
        try {
            const response = await fetch ("https//:hvtest.cl/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (result.sucess) {
                alert("Mensaje enviado")
                backToEmptyFormIputs()
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error(result)
                alert("Error: " + result.error)
            }
        } catch (error) {
            alert("Error al enviar el mensaje.")
            backToEmptyFormIputs()
        }
    }

    return (
        <section className={styles.contact_main_section_container}>
            <h1 className={styles.contact_title}>Déjanos tu mensaje y te responderemos a la brevedad</h1>
            <p className={styles.contact_paragraph}>Para cualquier duda o consulta sobre nuestros proyectos y equipos, complete el siguiente formulario y responderemos a la brevedad.</p>
            <form   
                onSubmit={sendEmail}
                method="post"
                encType="multipart/form-data"
                className={styles.contact_form}>
                <section className={styles.contact_form_sections}>
                    <label for="name">Nombre(s) *</label>
                    <input type="text" name="name" id="name" placeholder="Nombre" onSubmit="" required onChange={handleInputs}/>
                    <label for="lastName">Apellido(s) *</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Apellido" required onChange={handleInputs}/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="region">Región *</label>
                    <input type="text" name="region" id="region" placeholder="Región" required onChange={handleInputs}/>
                    <label for="email">Correo *</label>
                    <input type="email" name="email" id="email" placeholder="Correo eléctronico" required onChange={handleInputs}/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="phone">Telefono *</label>
                    <input type="tel" name="phone" id="phone" placeholder="Número telefonico" required onChange={handleInputs}/>
                    <label for="toWho">A quien va dirigido</label>
                    <select name="toWho" id="toWho" onChange={handleInputs}>
                        <option value="general" selected>General</option>
                        <option value="pruebas">Pruebas eléctricas</option>
                        <option value="control">Control y protecciones</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="asesoría">Asecesoría técnica</option>
                        <option value="arriendo">Arriendo de equipos</option>
                    </select>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="message">Ingrese su mensaje *</label>
                    <textarea type="text" name="message" id="message" />
                </section>
                <br />
                <button type="submit" value="Submit" className={styles.button_contact}>Enviar mensaje</button>
            </form>
        </section>
    )
}

export default ContactPage