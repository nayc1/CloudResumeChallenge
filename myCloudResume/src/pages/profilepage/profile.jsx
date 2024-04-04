import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import Profilebody from '../../components/profilebody/profilebody.jsx'
import Banner from '../../components/profileBanner/banner.jsx'
import styles from './profile.module.css'

function Profile(){
    return(
        <>
        <div className = {styles.pageLayout}>
            <Banner></Banner>
            <Header></Header>
            <Profilebody></Profilebody>
            <Footer></Footer>
        </div>
        </>
    )
}
export default Profile;
