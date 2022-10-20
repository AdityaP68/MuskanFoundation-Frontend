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
          <Link href="/">
            <a>
              <li>About Us</li>
            </a>
          </Link>
          <Link href="/campaigns">
            <a>
              <li>Campaigns</li>
            </a>
          </Link>
          <Link href="/gallery">
            <a>
              <li>Gallery</li>
            </a>
          </Link>
          <Link href="/contribute">
            <a>
              <div className={styles.contriBtn}>Contribute</div>
            </a>
          </Link>
          <Link href="/contact_us">
            <a>
              <li>Contact Us</li>
            </a>
          </Link>
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
