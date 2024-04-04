import CardServicesDetails from "../CardServicesDetails/CardServicesDetails"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "../ServiceFirstPage/ServiceFirstPage.module.css"

function ServiceThirdPage () {

    const mantainServiceImages = [
        "../../../public/assets/man1-service-image.jpeg",
        "../../../public/assets/man2-service-image.jpeg",
        "../../../public/assets/man3-service-image.jpeg",
        "../../../public/assets/man4-service-image.jpeg",
        "../../../public/assets/man5-service-image.jpeg",
        "../../../public/assets/man6-service-image.jpeg",
        "../../../public/assets/man7-service-image.jpeg",
        "../../../public/assets/man8-service-image.jpeg",
    ]

    const mantainServiceDescription = [
        {
            subtitle: "Entre los equipos que intervenimos tenemos:",
            items: [
                "Transformadores de potencia.",
                "Interruptores de baja, media y alta tensión.",
                "Desconectadores.",
                "Trampas de onda.",
                "Resistencias de puesta a tierra.",
                "Transformadores de potencial.",
                "Transformadores de corriente.",
                "Banco de Condensadores.",
                "Cables o conductores eléctricos.",
                "Descargadores de sobretensiones.",
                "Protecciones y Controles eléctricos.",
                "Celdas de media y baja tensión.",
                "Variadores de Frecuencia.",
            ]
        }
    ]

    return (
        <section className={styles.serviceone_main_container}>
            <h1 className={styles.serviceone_title}>
                Mantenimiento y Puesta en Servicio de Equipos Eléctricos
            </h1>
            <p className={styles.serviceone_paragraph}>
                Con el fin de garantizar la integridad de tus sistemas eléctricos, parte importante de nuestro servicio es la mantención y puesta en
                marcha de los equipos eléctricos instalados en cada subsistema eléctrico (Generación, transmision y distribución eléctrica), abarcando
                la mayoría del equipamento eléctrico instalado en cualquiera de estos subsistemas.
            </p>
            <section className={styles.serviceone_article_container}>
                {
                    mantainServiceDescription.map( (ing, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={ing.subtitle}
                            charactericticsList={ing.items}/>
                    ))
                }
                <ImageSlider 
                    imagesList={mantainServiceImages}/>
            </section>

        </section>
    )
}

export default ServiceThirdPage