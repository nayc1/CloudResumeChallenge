import styles from './header.module.css'

function Header (){
    return (
        <header className = {styles.container}>
        
        <div className={styles.title}> MY CLOUD RESUME.</div>
          <nav>
              <ul className = {styles.navbar}>
                  <li>Profile</li>
                  <li>Future Goals</li>
                  <li>Certifications</li>
              </ul>
          </nav>
          
        </header>
    );
}

export default Header;