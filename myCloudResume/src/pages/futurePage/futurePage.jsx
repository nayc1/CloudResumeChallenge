import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import Banner from '../../components/profileBanner/banner.jsx'
import styles from './futurePage.module.css'

function FuturePage(){
    return(
        <>
        <div className={styles.container}>
            <Banner></Banner>
            <Header></Header>
            <Footer></Footer>
        </div>
        </>
    )
}
export default FuturePage;