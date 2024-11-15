import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2023 Juego de Adivinanzas. Todos los derechos reservados.</p>
            <div className={styles.socialLinks}>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
