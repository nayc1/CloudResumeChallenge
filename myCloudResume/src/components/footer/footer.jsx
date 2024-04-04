import styles from './footer.module.css'

function Footer() {
    return(
        <div className ={styles.container}><p> &copy;{new Date().getFullYear()} my cloud resume</p></div>
    );
}

export default Footer;