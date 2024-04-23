import CardTestGears from "../CardTestGears/CardTestGears";

import styles from "./ServiceFivePage.module.css"

import imageFiveService1 from "../../../public/assets/RMO200G.png"
import imageFiveService2 from "../../../public/assets/DLRO10.png"
import imageFiveService3 from "../../../public/assets/MIT10202.png"
import imageFiveService4 from "../../../public/assets/AEMCDTR8510.png"
import imageFiveService5 from "../../../public/assets/FLIRE5.png"
import imageFiveService6 from "../../../public/assets/ALROCMF360.png"
import imageFiveService7 from "../../../public/assets/MEGGERS1-1068.png"
import imageFiveService8 from "../../../public/assets/AEMC6472.png"
import imageFiveService9 from "../../../public/assets/AEMC6250.png"

import pdfFiveService1 from "../../../public/assets/RMO-200G.pdf"
import pdfFiveService2 from "../../../public/assets/DLRO10.pdf"
import pdfFiveService3 from "../../../public/assets/MEGGERMIT1020-2.pdf"
import pdfFiveService4 from "../../../public/assets/DTR8510.pdf"
import pdfFiveService5 from "../../../public/assets/FLIRE5.pdf"
import pdfFiveService6 from "../../../public/assets/MF360S.pdf"
import pdfFiveService7 from "../../../public/assets/MEGGERS1-1068.pdf"
import pdfFiveService8 from "../../../public/assets/AEMC6472.pdf"
import pdfFiveService9 from "../../../public/assets/AEMC6250.pdf"



const testGears = [
    {
        name: "Micróhmetro 200 A",
        brand: "Dv Power",
        model: "RMO 200G",
        image: imageFiveService1,
        description: `La serie RMO-G de Micro Ohmímetros se basan en una tecnología de vanguardia, utilizando la técnica de 
        conmutación más avanzada disponible en la actualidad. La principal diferencia entre estos modelos es la máxima
        corriente de prueba que se puede generar (100 A para RMO100G, 200 A para RMO200G y de hasta 800 A para
        RMO800G).`,
        characteristics: `Ligeros: de 8 a 11,5 kg /17.6 lbs a 25.4 lbs.
        Potentes: de hasta 800 A CC.
        Rango de medición 0 a 999,9 mΩ (de hasta 6 Ω).
        Mejor resolución 0,01 μΩ.
        Precisión típica ± (0,1 % rdg + 0,1 % FS).
        Modos SINGLE / CONTIN / BSG / DTRtest.`,
        eett: pdfFiveService1
    },
    {
        name: "Micróhmetro - 10 A",
        brand: "Avo",
        model: "DLRO 10",
        image: imageFiveService2,
        description: `El ohmiómetro DLRO10 y DLRO10X aporta un nuevo estándar en la medición de bajos valores de
        resistencias. Ambos son instrumentos totalmente automáticos, que seleccionan la corriente de
        prueba más idónea, de hasta 10 A de c.c., para medir resistencias desde 0,1μΩ hasta 2.000Ω , en
        uno de siete rangos posibles. Para aquellos usuarios que desean un mayor control sobre el proceso
        de medida, DLRO10X utiliza un sistema de menús controlado por un par de puntas de prueba
        bidireccionales, que permiten la selección manual de la corriente de prueba.`,
        characteristics: `Resultados precisos en menos de 3 segundos.
        La inversión automática de corriente anula fuerzas electromotrices estacionarias.
        Protegido por fusibles hasta 600 V.
        Límite de potencia de 250mW (con anulación opcional) para evitar el calentamiento de la muestra
        objeto de prueba.
        Detecta automáticamente la condición de continuidad en conexiones de voltaje y corriente.
        Advertencia visible de presencia de alto voltaje en terminales.
        Advertencia visible de corriente en la muestra objeto de prueba.
        Múltiples modos de funcionamiento incluyendo uno completamente automático.`,
        eett: pdfFiveService2
    },
    {
        name: "Medidor de aislamiento - 10 kV",
        brand: "Megger",
        model: "MIT 1020/2",
        image: imageFiveService3,
        description: `El modelo MIT1020/2, 10 kV probador de resistencia de aislamiento diseñado específicamente para
        ayudar al usuario con las pruebas y el mantenimiento de alta tensión. Los instrumentos están diseñados en un
        estilo paisajístico que es más familiar y fácil de usar.`,
        characteristics: `- Alimentación eléctrica o con pilas
        - Pantalla retroiluminada digital/analógica
        - Rango de medición hasta 15 TΩ (35 TΩ (MIT1020/2)
        - Clasificación de seguridad CAT IV 600 V
        - Relación de absorción dieléctrica automática,
        índice de polarización, voltaje de paso y
        pruebas de descarga dieléctrica (MIT1020/2)
        - Descarga de resultados mediante RS232 o USB.
        - Protección de ingreso a IP65
        - Corriente de cortocircuito de 3 mA`,
        eett: pdfFiveService3
    },
    {
        name: "Medidor de relación de transformación TTR",
        brand: "Aemc",
        model: "DTR 8510",
        image: imageFiveService4,
        description: `AEMC DTR 8510 es un medidor de relación de transformación digital portátil diseñado para pruebas in situ de
        transformadores de potencia, potencial y corriente. No se requiere calibración del usuario, selección de rango,
        manivela manual o equilibrado tedioso. En cada medición, el DTR auto calibra y comprueba automáticamente si hay
        bobinados/conexiones/disyuntores abiertos, cortocircuitos (exceso de corriente de excitación), colocación incorrecta
        del cable de prueba y polaridad inversa. Las mediciones se muestran de forma rápida y precisa.`,
        characteristics: `• Prueba de relación: PT / VT de 0.8000: 1 a 8000: 1 y CT de 0.8000 a 1000.0 (rango automático)
        - Pruebas realizadas excitando el primario y leyendo el secundario; Proporciona condiciones más seguras para el
        operador en transformadores reductores
        - La prueba de continuidad indica conexiones de terminales abiertas o sueltas (alta resistencia)
        - El modo de prueba de CC elimina los errores debidos a la acumulación magnética
        - Almacena hasta 10 voltajes primarios/secundarios de la placa de identificación para usar en la comparación de los
        resultados de las pruebas
        - Muestra la relación, la corriente de prueba, la polaridad del devanado y la desviación del voltaje o la relación de la
        placa de identificación
        - Almacena hasta 10.000 resultados de pruebas
        - Se incluye el software DataView que permite configurar el instrumento, descargar las mediciones almacenadas e
        imprimir los resultados de las pruebas en formato de informe®
        - La pantalla advierte de conexión incorrecta del cable, polaridad inversa, circuitos abiertos y cortocircuitos`,
        eett: pdfFiveService4
    },
    {
        name: "Cámara termográfica",
        brand: "Flir",
        model: "E5",
        image: imageFiveService5,
        description: `La FLIR E5 es de las primeras cámaras infrarrojas real con imágenes térmicas visibles y MSX.
        Ahora todos los técnicos e inspectores de la industria pueden permitirse el lujo de usar una cámara de
        la Serie E útil para escaneos rápidos y controles de seguridad. Es más fácil de usar que un teléfono
        inteligente. La línea más nueva de cámaras termográficas económicas de FLIR ofrece todo lo que
        necesitas para una amplia variedad de inspecciones por infrarrojos. Vea y encuentre claramente los
        componentes eléctricos-mecánicos ocultos, sobrecalentamientos, fuentes de fuga de energía,
        problemas de humedad y más. Esta es una herramienta imprescindible que puede ayudar a las
        empresas a mejorar significativamente los tiempos de producción y servicio, reduciendo costos
        ocasionados por fallas.`,
        characteristics: ``,
        eett: pdfFiveService5
    },
    {
        name: "Máquina para confección de mufas o terminaciones",
        brand: "Alroc",
        model: "MF3/60",
        image: imageFiveService6,
        description: `El MF3/60-SCR es una herramienta ajustable que le permite realizar un corte recto y sin rebabas en la cubierta exterior de PE-PVC-PR
        de los cables. Realiza cortes precisos de la semi conductora pelable con chaflán en el tope (con el estilete SCR suministrado). Realiza un corte 
        recto y sin rebabas en el aislamiento de alto espesor del cable a la longitud deseada.`,
        characteristics: `- Cortar / serrar
        - Quitar la cubierta exterior
        - Engarzar los conectores
        - Trabajar sobre la cubierta exterior
        - Quitar / trabajar sobre la pantalla
        - Quitar la semiconductora externa
        - Quitar el aislamiento
        - Trabajar el aislamiento`,
        eett: pdfFiveService6
    },
    {
        name: "Medidor de aislamiento 10 kV",
        brand: "Megger",
        model: "S1 - 1068",
        image: imageFiveService7,
        description: `Megger modelo 10 kV denominados S1-1068, Estos instrumentos de alta gama tienen como
        objetivos empresas de servicios públicos y empresas de servicios que trabajan en los mercados de
        generación, transmisión y distribución. La corriente de carga de primera clase, el rechazo de ruido y
        los filtros de software hacen de los comprobadores de Resistencia de aislamiento de CC de la serie
        S1 de Megger los más avanzados en la actualidad.
        La productividad de los instrumentos es un punto central de la nueva serie S1, que ofrece baterías
        de carga rápida y funcionamiento con una fuente de CA cuando la batería está descargada.`,
        characteristics: `- Compacto y ligero
        - Facilidad de usar
        - Rango de resistencia de hasta 35 TΩ
        - Rechazo de ruido de 8 mA más 4 filtros
        - Seguridad hasta CATIV 1000 V a 4000 m
        - Batería de iones de litio de carga rápida; cumple con IEC62133
        - Funcionan con la batería descargada con una fuente de CA
        - Diseño resistente con dos carcasas`,
        eett: pdfFiveService7
    },
    {
        name: "Telurometro",
        brand: "Aemc",
        model: "6472",
        image: imageFiveService8,
        description: `El ohmetro de tierra C.A 6472 es un instrumento de medida portátil completo para realizar medidas de tierra,
        medidas de resistividad de los terrenos, tensión de paso y contacto, y con el accesorio Pylon box C.A 6474,
        medidas de tierra de las torres. Se presenta en una carcasa resistente y estanca. Se alimenta por una batería
        recargable con cargador incorporado.`,
        characteristics: `- Resistencia a 2 hilos o 4 hilos,
        - Resistencia de tierra a 3 puntos o 4 puntos
        - Acoplamiento de las resistencias de tierra
        - Resistencia de tierra selectiva
        - Resistividad de los terrenos
        - Potencial de tierra
        - Resistencia de tierra de las torres con el accesorio Pylon box C.A 6474`,
        eett: pdfFiveService8
    },
    {
        name: "Micróhmetro 10 A",
        brand: "Aemc",
        model: "6250",
        image: imageFiveService9,
        description: `El micrómetro C.A 6250 es un aparato de medida de alta calidad,
        digital, portátil, con pantalla LCD retroiluminada. Está destinado a medir valores
        de resistencia muy débiles. Se presenta en una carcasa estanca y robusta con tapa.
        El C.A 6250 es un aparato autónomo, alimentado por una batería recargable con cargador
        integrado. Propone 7 calibres de medida, de 5 mW a 2500 W, directamente accesibles y
        seleccionables por el conmutador giratorio ubicado en el frontal. Funciona según el método
        de medida de 4 hilos con una compensación automática de las tensiones parásitas.`,
        characteristics: `- Medida de continuidad de masas.
        - Medida de resistencias de motores y de transformadores.
        - Medida de resistencias de contacto.
        - Medidas de componentes.
        - Medidas de resistencias de cables eléctricos.
        - Test de conexiones mecánicas.`,
        eett: pdfFiveService9
    }
] 

function ServiceFivePage () {

    return (
        <section className={styles.servicefive_main_container}>
                <h1 className={styles.servicefive_title}>Arriendo de Equipos de Pruebas Eléctricas</h1>
            <section className={styles.servicefive_titleanddescription_container}>
                <p className={styles.servicefive_paragraph}>
                    Nuestra empresa comprometida con la importancia de la infraestructura eléctrica ofrece una amplia gama de
                    servicios específicos en el área de ensayos eléctricos, entre los cuales tenemos el arriendo de equipamiento
                    para la ejecución de pruebas eléctricas, contando con un diverso stock para cumplir las necesidades de nuestros
                    clientes y así permitir realizar puestas en servicio y ensayos bajo criterios de las normas nacionales e internacionales.
                </p>
            </section>
            <section className={styles.servicefive_cards_main_container}>
                {
                    testGears.map(gear => ( 
                        <CardTestGears 
                            key={gear.name}
                            name={gear.name}
                            brand={gear.brand}
                            model={gear.model}
                            image={gear.image}
                            description={gear.description}
                            characteristics={gear.characteristics}
                            eett={gear.eett}
                        />
                    ))
                }
            </section>

        </section>
    )
}

export default ServiceFivePage