import Image from 'next/image'
import React from 'react'
import styles from './Banner.module.scss'

function Banner() {
  return (
    <section className={styles.container}>
        <img src ={"/images/campaign4.png"} alt ="banner"/>
        <div className={styles.padding}>
            <h1>Muskan - Non-Governmental Organisation in Bhilwara</h1>
        </div>
    </section>
  )
}

export default Banner