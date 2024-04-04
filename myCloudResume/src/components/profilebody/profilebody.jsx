import styles from './profilebody.module.css'

function Profilebody(){
    return(
        

        <div className ={styles.container}>
            <p className ={styles.firstParagraph}>This is the start of my cloud enginerring journey. I graduated from berkeley with little experience in tech with a bachelors in genetics. I decided in the gap year I took before going back to grad school to learn about coding and cloud engineering. I decided to tackle the cloud resume challenge after taking multiple cs classes. Below will contain my qualifications as I get them as well as my favorite portfolio projects as I continue my journey</p>
            <ul className= {styles.profileList}>
                <li className = {styles.qualCard}>
                    <div className = {styles.qualTitle}>Bachelors degree</div>
                    <p className ={styles.qualDesc}> UC berkeley bachelors degree in genetics with a focus on genomics and using software to parse DNA.</p>
                </li>
                <li className = {styles.qualCard}>
                    <p className = {styles.qualTitle}>Cloud Certifcations</p>
                </li>
            </ul>
        </div>

    
    );
}
export default Profilebody;