import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import styles from "./SocialLogos.module.css"


function SocialLogos () {
    return (
        <section className={styles.logos_main_container}>
            <a href="" taget="_blank" rel="noopener noreferrer"><BsInstagram className={styles.insta_logo}/></a>
            <a href="" taget="_blank" rel="noopener noreferrer"><BsLinkedin className={styles.insta_logo}/></a>
            <a href="" taget="_blank" rel="noopener noreferrer"><BsWhatsapp className={styles.insta_logo}/></a>
        </section>
    )
}

export default SocialLogos