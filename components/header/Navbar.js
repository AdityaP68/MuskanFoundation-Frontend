import styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

function Navbar() {
  return (
    <header className={styles.header}>
      <address className={styles.address}>
        <span>012-3846579 | Muskan@foundation.org</span>
      </address>
      <nav>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <img src={"/images/logo.png"} />
            </div>
          </a>
        </Link>
        <ul className={styles.navContainer}>
          <Link href="/campaigns">
            <a>
              <li>About Us</li>
            </a>
          </Link>
          <li>Campaign</li>
          <li>Gallery</li>
          <div className={styles.contriBtn}>Contribute</div>
          <li>Contact Us</li>
        </ul>
        <span
          className={styles.hamburgerMenu}
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
