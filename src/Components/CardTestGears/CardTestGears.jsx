import styles from "./CardTestGears.module.css"

function CardTestGears ( { name, brand, model, image, description, characteristics, eett }) {
    return (
        <section className={styles.testgear_article_main_container}>
            <article className={styles.testgear_article_container}>
                <section className={styles.testgear_image_container}>
                    <img src={image} alt="Equipo-de-medida-eléctrica" className={styles.testgear_image}/>
                </section>
                <h1 className={styles.testgear_name}>{name}</h1>
                <h2 className={styles.testgear_brand}>Marca: {brand}</h2>
                <h2 className={styles.testgear_model}>Modelo: {model}</h2>
                <section className={styles.testgear_buttons_container}>
                    <button className={styles.testgear_description_button}>Descripción</button>
                    <button className={styles.testgear_eett_button}>
                        <a href={`../../../public/assets/${eett}`} target="_blank" rel="noopener noreferrer">Ficha técnica</a>
                    </button>
                </section>
            </article>
        </section>
    )
}

export default CardTestGears