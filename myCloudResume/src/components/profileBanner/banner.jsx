import styles from './banner.module.css'

function Banner(){
    return(
        <div className={styles.container}>
            <img alt="profile picture"></img>
            <h3>Sean La</h3>
            <p>aspiring cloud engineer</p>
        </div>
    )
}
export default Banner;