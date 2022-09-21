import styles from './DonationForm.module.scss'

import React from 'react'

function DonationForm() {
  return (
    <form className={styles.container} action = 'google.com' method='POST'>
        <h2>Help Us Give the Power to Choose in a Child’s Hands</h2>
        <ul className={styles.amtBox}>
                <li>3600</li>
                <li>10800</li>
                <li>18000</li>
        </ul>
        <div className={styles.amtValWrapper}>
            <span></span>
            <input placeholder='Other Amount'/>
        </div>
        
            <button type='submit'>Donate</button>
     
    </form>
  )
}

export default DonationForm