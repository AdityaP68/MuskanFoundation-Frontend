import styles from './Footer.module.scss'

import React from 'react'

function Footer() {
  return (
    <footer  className={styles.footerContainer}>
        <div className={styles.topRow}>
            <img src={"/images/logo.png"} />
            <div className={styles.quickLinks}>
                <li>CALL US NOW</li>
                <li>SEND AN EMAIL</li>
                <li>ADDRESS OF NGO</li>
            </div>
        </div>
    </footer>
  )
}

export default Footer