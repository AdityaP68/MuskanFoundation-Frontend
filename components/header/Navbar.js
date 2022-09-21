
import styles from "./Navbar.module.scss";


function Navbar() {
  return (
    <header className={styles.header}>
      <address className={styles.address}>
        <span>012-3846579 | Muskan@foundation.org</span>
      </address>
      <nav>
        <div className={styles.logo}>
            <img src ={'/images/logo.png'}/>
        </div>
        <ul className={styles.navContainer}>
          <li>About Us</li>
          <li>Donation</li>
          <li>Campaign</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
