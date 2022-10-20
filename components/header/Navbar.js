import styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <header className={styles.header}>
      <address className={styles.address}>
        <span>012-3846579 | Muskan@foundation.org</span>
      </address>
      <nav>
        <div className={styles.logo}>
          <img src={"/images/logo.png"} />
        </div>
        <ul className={styles.navContainer}>
          <li>About Us</li>
          <li>Campaign</li>
          <li>Gallery</li>
          <div className={styles.contriBtn}>Contribute</div>
          <li>Contact Us</li>
        </ul>
        <span
            className = {styles.hamburgerMenu}
          onClick={() => {
            console.log("click");
          }}
        >
          <MenuIcon className={styles.mobMenu} />
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
