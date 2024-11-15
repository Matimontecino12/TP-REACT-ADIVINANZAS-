import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Juego de Adivinanzas</h1>
            <nav className={styles.nav}>
                <a href="#">Inicio</a>
                <a href="#">Sobre Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;
