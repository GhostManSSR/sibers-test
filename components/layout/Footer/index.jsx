import styles from "@/assets/styles/components/layout/Footer.module.css"

const Footer = () => {

    return(
        <footer className={styles.footer__container}>
            <div className={styles.footer__column}>
                <img src={"img/logo.png"} alt="logo" className={styles.footer__logo}/>
            </div>
            <div className={styles.footer__column}>
                <a href="#" className={styles.footer__link}>FAQ</a>
                <a href="#" className={styles.footer__link}>Contacts</a>
                <a href="#" className={styles.footer__link}>Info</a>
            </div>
        </footer>
    )
}

export default Footer